// import React, { useState } from "react";

// const EventsOrganization = () => {
//   const [items, setItems] = useState([]);

//   const [inputValues, setInputValues] = useState({
//     name: "",
//     quantity: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   const addItem = () => {
//     const { name, quantity, price } = inputValues;
//     if (name.trim() !== "" && quantity.trim() !== "" && price.trim() !== "") {
//       const newItem = {
//         id: new Date().getTime(),
//         name: name.trim(),
//         quantity: parseInt(quantity),
//         price: parseFloat(price),
//       };

//       setItems([...items, newItem]);

//       setInputValues({
//         name: "",
//         quantity: "",
//         price: "",
//       });
//     }
//   };

//   const deleteItem = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);

//     setItems(updatedItems);
//   };

//   return (
//     <div className="mt-5">
//       <h1>CRUD App</h1>

//       <div>
//         <input
//           type="text"
//           name="name"
//           value={inputValues.name}
//           onChange={handleChange}
//           placeholder="Enter name..."
//         />
//         <input
//           type="number"
//           name="quantity"
//           value={inputValues.quantity}
//           onChange={handleChange}
//           placeholder="Enter quantity..."
//         />
//         <input
//           type="number"
//           name="price"
//           value={inputValues.price}
//           onChange={handleChange}
//           placeholder="Enter price..."
//         />
//         <button onClick={addItem}>Add Item</button>
//       </div>
//       {/* Display list of items */}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <div>Name: {item.name}</div>
//             <div>Quantity: {item.quantity}</div>
//             <div>Price: {item.price}</div>
//             {/* Button to delete item */}
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventsOrganization;

import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { BiDetail } from "react-icons/bi";

const EventsOrganization = () => {
  // State to store list of items
  const [items, setItems] = useState([]);
  // State to store input values
  
  const [inputValues, setInputValues] = useState({
    name: "",
    quantity: "",
    price: "",
    datedetail:"",
  });
  // State to store the id of the item being edited
  const [editItemId, setEditItemId] = useState(null);

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Function to handle adding or updating an item
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, quantity, price ,datedetail } = inputValues;
    if (name.trim() !== "" && quantity.trim() !== "" && price.trim() !== "") {
      if (editItemId !== null) {
        // Update existing item
        const updatedItems = items.map((item) =>
          item.id === editItemId
            ? {
                ...item,
                name,
                quantity,
                price,
                datedetail,
              }
            : item
        );
        setItems(updatedItems);
        setEditItemId(null);
      } else {
        // Add new item
        const newItem = {
          id: new Date().getTime(),
          name: name.trim(),
          quantity: quantity.trim(),
          price: price.trim(),
          datedetail: datedetail.trim(),
        };
        setItems([...items, newItem]);
      }
      // Clear input fields
      setInputValues({
        name: "",
        quantity: "",
        price: "",
        datedetail:"",
      });
    }
  };

  // Function to handle editing an item
  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      // Set input values to item's values
      setInputValues({
        name: itemToEdit.name,
        quantity: itemToEdit.quantity,
        price: itemToEdit.price,
        datedetail: itemToEdit.datedetail,
      });
      // Set editItemId to the id of the item being edited
      setEditItemId(id);
    }
  };

  // Function to handle deleting an item
  const deleteItem = (id) => {
    // Filter out the item with the specified id
    const updatedItems = items.filter((item) => item.id !== id);
    // Update items state with filtered items
    setItems(updatedItems);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center mt-4">
        <div className="shadow-sm p-4  mt-5 ms-3">
          <form onSubmit={handleSubmit} className="d-flex">
            <div class="form-group mx-4">
              <label><h4>Event Title</h4></label>
              <input
                class="form-control"
                type="text"
                name="name"
                value={inputValues.name}
                onChange={handleChange}
                placeholder="Enter Event Name"
              />
            </div>
            <div class="form-group mx-4">
              <label><h4>Details</h4></label>
              <input
                class="form-control"
                type="text"
                name="quantity"
                value={inputValues.quantity}
                onChange={handleChange}
                placeholder="Event Details"
              />
            </div>
            <div class="form-group mx-4">
              <label><h4>Location</h4></label>
              <input
                type="text"
                name="price"
                class="form-control"
                value={inputValues.price}
                onChange={handleChange}
                placeholder="Event Location"
              />
            </div>
            <div class="form-group mx-4">
              <label><h4>date</h4></label>
              <input
                type="text"
                name="datedetail"
                class="form-control"
                value={inputValues.datedetail}
                onChange={handleChange}
                placeholder="22/06/2024"
              />
            </div>
            <div>
              <button type="submit" class="btn btn-primary mt-4">
                {editItemId !== null ? "Update" : "Add"} Event
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div
        class="offcanvas offcanvas-start show"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "300px", top: "82px" }}
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            SideBar
          </h5>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div> */}
      <div className="container mt-4 d-flex" style={{ marginLeft: "19rem" }}>
        {items.map((item) => (
          <div class="card p-0 me-4" style={{ width: "18rem" }} key={item.id}>
            <img
              class="card-img-top border-0"
              src="https://img.freepik.com/premium-vector/event-planner-template-hand-drawn-cartoon-illustration-with-planning-schedule-calendar-concept_2175-7747.jpg?w=996"
              alt="Card image cap"
            />
            <div class="card-body w-100">
              <p class="card-text">
                <h3><span><b>{item.name}</b></span></h3>
                <div><span><b>{item.quantity}</b></span></div>
                <div><span><b><FaLocationDot/> &nbsp;  &nbsp; {item.price}</b></span></div>
                <div><span><b><BsCalendar2DateFill /> &nbsp;  &nbsp; {item.datedetail}</b></span></div>
              </p>
              <span>
              <button
                class="btn btn-primary mt-4"
                onClick={() => editItem(item.id)}
              >
              <b>  Edit <MdEdit/></b>
              </button>
              <button class="btn btn-primary mt-4" onClick={() => deleteItem(item.id)} style={{"marginLeft":"20px"}}>
              <b>  Delete <MdDelete/></b>
              </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsOrganization;
