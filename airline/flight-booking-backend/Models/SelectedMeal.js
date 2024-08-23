const selectedMealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

const SelectedMeal = mongoose.model('SelectedMeal', selectedMealSchema);

export default SelectedMeal;