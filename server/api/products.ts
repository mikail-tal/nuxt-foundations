export default defineEventHandler(async () => {
  const products = await getProducts();
  return products;
});

function getProducts() {
  return [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
}
