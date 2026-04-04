import '@testing-library/jest-dom'

// jsdom does not implement scrollIntoView — provide a no-op mock
window.HTMLElement.prototype.scrollIntoView = function () {}
