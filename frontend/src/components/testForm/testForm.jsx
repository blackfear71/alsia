const TestForm = ({ formData, setFormData, onSubmit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        console.log('Données ajoutées :', formData);
        onSubmit(formData);
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
};

export default TestForm;
