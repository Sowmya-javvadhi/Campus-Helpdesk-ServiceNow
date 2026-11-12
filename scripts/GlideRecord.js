
var gr = new GlideRecord(
    'x_1458858_campus_0_campus_it_ticket'
);

gr.addQuery('priority', 'high');
gr.query();

while (gr.next()) {
    gs.info('Ticket Number: ' +
        gr.getValue('number'));

    gs.info('Short Description: ' +
        gr.getValue('short_description'));
}
