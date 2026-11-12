
var CampusTicketUtils = Class.create();

CampusTicketUtils.prototype = {
    initialize: function() {
    },

    getHighPriorityTickets: function() {
        var gr = new GlideRecord(
            'x_1458858_campus_0_campus_it_ticket'
        );

        gr.addQuery('priority', 'high');
        gr.query();

        var count = 0;

        while (gr.next()) {
            count++;

            gs.info('High Priority Ticket: ' +
                gr.getValue('number'));
        }

        return count;
    },

    type: 'CampusTicketUtils'
};
