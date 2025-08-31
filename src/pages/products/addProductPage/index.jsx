import AddProductForm from "../../../component/form/AddProductForm";

const AddProductPage = () => {
  const handleAddProduct = (formData) => {
    // Send data to backend or state management store
    console.log("New Product Data:", formData);

    // Example: API call
    // fetch("/api/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto overflow-x-hidden">
      <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>      
      <AddProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;