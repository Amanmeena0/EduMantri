"""
Tests for prompt templates defined in prompts/prompts.py.

All prompts are pure Python (ChatPromptTemplate objects); no LLM calls are made.
"""

import pytest
from langchain_core.prompts import ChatPromptTemplate


# ---------------------------------------------------------------------------
# Import under test
# ---------------------------------------------------------------------------
from prompts.prompts import (
    system_prompt,
    contextualize_q_prompt,
    qa_prompt,
    followup_prompt,
)


# ---------------------------------------------------------------------------
# system_prompt (plain string)
# ---------------------------------------------------------------------------


class TestSystemPrompt:
    def test_is_string(self):
        assert isinstance(system_prompt, str)

    def test_contains_context_placeholder(self):
        assert "{context}" in system_prompt

    def test_contains_input_placeholder(self):
        assert "{input}" in system_prompt

    def test_contains_dgft_mention(self):
        assert "DGFT" in system_prompt

    def test_fallback_message_present(self):
        assert "I cannot find sufficient information" in system_prompt

    def test_output_format_present(self):
        assert "Answer:" in system_prompt


# ---------------------------------------------------------------------------
# contextualize_q_prompt
# ---------------------------------------------------------------------------


class TestContextualizeQPrompt:
    def test_is_chat_prompt_template(self):
        assert isinstance(contextualize_q_prompt, ChatPromptTemplate)

    def test_has_input_variable(self):
        assert "input" in contextualize_q_prompt.input_variables

    def test_has_chat_history_variable(self):
        # chat_history is injected via MessagesPlaceholder
        variables = (
            list(contextualize_q_prompt.input_variables)
            + list(contextualize_q_prompt.optional_variables)
        )
        assert "chat_history" in variables

    def test_message_count(self):
        # system message + MessagesPlaceholder + human message = 3 entries
        assert len(contextualize_q_prompt.messages) == 3

    def test_formats_with_empty_history(self):
        messages = contextualize_q_prompt.format_messages(
            chat_history=[], input="What is FTP?"
        )
        assert len(messages) >= 2
        assert any("FTP" in str(m.content) for m in messages)

    def test_formats_with_history(self):
        from langchain_core.messages import HumanMessage, AIMessage

        history = [
            HumanMessage(content="Tell me about MEIS"),
            AIMessage(content="MEIS is a scheme for merchandise exports."),
        ]
        messages = contextualize_q_prompt.format_messages(
            chat_history=history, input="How do I apply?"
        )
        contents = [str(m.content) for m in messages]
        assert any("MEIS" in c for c in contents)

    def test_system_message_content(self):
        first_msg = contextualize_q_prompt.messages[0]
        assert "DGFT" in first_msg.prompt.template
        assert "reformulate" in first_msg.prompt.template.lower()


# ---------------------------------------------------------------------------
# qa_prompt
# ---------------------------------------------------------------------------


class TestQAPrompt:
    def test_is_chat_prompt_template(self):
        assert isinstance(qa_prompt, ChatPromptTemplate)

    def test_has_input_variable(self):
        assert "input" in qa_prompt.input_variables

    def test_has_context_variable(self):
        assert "context" in qa_prompt.input_variables

    def test_includes_few_shot_examples(self):
        """The prompt includes few-shot weather / textile examples."""
        all_content = " ".join(
            str(m) for m in qa_prompt.messages
        )
        assert "weather" in all_content.lower()
        assert "textile" in all_content.lower()

    def test_formats_with_empty_history(self):
        messages = qa_prompt.format_messages(
            chat_history=[],
            input="What is IEC?",
            context="IEC stands for Importer Exporter Code.",
        )
        assert len(messages) >= 1

    def test_formats_context_into_system_message(self):
        messages = qa_prompt.format_messages(
            chat_history=[],
            input="What is AEO?",
            context="AEO is Authorised Economic Operator.",
        )
        full_text = " ".join(str(m.content) for m in messages)
        assert "AEO" in full_text

    def test_fallback_example_present(self):
        """Ensure the hardcoded fallback AI message is part of the template."""
        all_content = " ".join(str(m) for m in qa_prompt.messages)
        assert "I cannot find sufficient information" in all_content


# ---------------------------------------------------------------------------
# followup_prompt
# ---------------------------------------------------------------------------


class TestFollowupPrompt:
    def test_is_chat_prompt_template(self):
        assert isinstance(followup_prompt, ChatPromptTemplate)

    def test_has_input_variable(self):
        assert "input" in followup_prompt.input_variables

    def test_has_context_variable(self):
        assert "context" in followup_prompt.input_variables

    def test_system_message_mentions_two_questions(self):
        system_msg = followup_prompt.messages[0]
        assert "2" in system_msg.prompt.template

    def test_formats_correctly(self):
        messages = followup_prompt.format_messages(
            context="DGFT issues IEC codes for importers/exporters.",
            input="How do I get an IEC?",
        )
        assert len(messages) >= 1

    def test_system_message_mentions_dgft(self):
        system_msg = followup_prompt.messages[0]
        assert "DGFT" in system_msg.prompt.template

    def test_example_format_in_system_message(self):
        system_msg = followup_prompt.messages[0]
        # The example format block is present
        assert "documentation" in system_msg.prompt.template.lower()
