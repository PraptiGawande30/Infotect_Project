import React, { useState, useEffect } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const url = "http://localhost:4000";
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        alert("Product added successfully!");
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(null);
        navigate("/dashboard"); // ✅ Redirect after success
      } else {
        alert("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      alert("Error while submitting. Try again.");
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload preview"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            type="text"
            name='name'
            value={data.name}
            onChange={onChangeHandler}
            placeholder='Type here'
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            rows="6"
            placeholder='Write content here'
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              name="category"
              value={data.category}
              onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              type="number"
              name='price'
              value={data.price}
              onChange={onChangeHandler}
              placeholder='$20'
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
