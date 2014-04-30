Restaurant.Item = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('decimal')
})
Restaurant.Item.FIXTURES = [
 {
   id: 1,
   name: 'something',
   price: 6.99
 },
 {
   id: 2,
   name: 'something else',
   price: 2.99
 },
 {
   id: 3,
   name: 'and something else',
   price: 9.99
 }
];
