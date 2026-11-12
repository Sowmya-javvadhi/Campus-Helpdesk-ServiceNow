
(function executeRule(current, previous) {
    gs.info('CAMPUS BUSINESS RULE EXECUTED');
    gs.info('New campus ticket created: ' +
        current.getDisplayValue('number'));
})(current, previous);
