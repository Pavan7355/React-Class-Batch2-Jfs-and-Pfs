import React,{useState} from "react";
import './index.css'

function RegistrationFrom(){// this use state method which appects two data 1)current data  2)function updated data
    const[firstname, setFirstname]= useState("")
    const[lastname, setLastname]= useState("")
    const[mobilenumber, setMobnumber]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const[confpassword, setConfpassword]= useState("")
    const [passwordError, setPasswordError] = useState(false);
    const[dob, setDob]= useState("")
    const [gender, setSelectedOption] = useState('');
    const[selectstate, setSelectstate]= useState("")
    const[selectcourse, setSelectcourse]= useState("")
    const[deliverymode, setSelectedDelivery]= useState("")
    const[comments, setComments]= useState("")
    
    const handleOptionChange = (event) => {   // this are the function where updated data are stored for gender
      setSelectedOption(event.target.value);
      
    };
    const handleOption = (event) => {   // this are the function where updated data are stored for delivery mode
      setSelectedDelivery(event.target.value);
    };

    const handleSubmit = (e) => {  // handle form submission logic here
        e.preventDefault();
        if (password !== confpassword) {
          setPasswordError(true);
        }                        // this if condition logic for the password validation
        else {
          setPasswordError(false);
          // alert("Password submitted successfully!");
        console.log("Firstname:", firstname);
        console.log("Lastname:", lastname);
        console.log("Mobilenumber:", mobilenumber);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("ConfirmPassword:", confpassword);
      
        console.log("DOB:", dob);
        console.log("Gender:", gender);
        console.log("SelectState:", selectstate);
        console.log("SelectCourse:", selectcourse);
        console.log("DeliveryMode:", deliverymode);
        console.log("Comments:", comments);
        alert('Your response updated successfully: ' + firstname);
        }
        // window.location.reload();

        // Add logic here to submit form data to backend
      };
      return(
   <> 
    <form className="registration-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
      <div className="form-group">
        <label htmlFor="firstname">Firstname:</label>
        <input placeholder="Enter Your First Name"
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Lastname:</label>
        <input placeholder="Enter Your Last Name"
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobilenumber">Mobilenumber:</label>
        <input placeholder="Enter Mobilenumber" maxLength={"10"}
          type="text"
          id="mobilenumber"
          value={mobilenumber}
          onChange={(e) => setMobnumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input placeholder="Enter Your email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input placeholder="Enter Password" maxLength={"10"}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confpassword">ConfirmPassword:</label>
        <input placeholder="Confirm Password" maxLength={"10"}
          type="password"
          id="confpassword"
          name="confpassword"
          value={confpassword}
          onChange={(e) => setConfpassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dob">DOB:</label>
        <input type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div className="form-group1">
        <label htmlFor="gender">Gender:</label>
        <input className="gender"type="radio" value="Male" checked={gender === "Male"}
         onChange={handleOptionChange} /><label>Male</label>
        <input className="gender"type="radio" value="Female" checked={gender === "Female"} 
        onChange={handleOptionChange} /><label>Female</label>
        <input className="gender"type="radio" value="Others" checked={gender === "Others"} 
        onChange={handleOptionChange} /><label>Others</label>
      </div>
      
      <div className="form-group">
        <label htmlFor="selectstate">SelectState:</label>
       <select id="selectstate"
          value={selectstate}
          onChange={(e) => setSelectstate(e.target.value)}
          required>
		    <option></option>
		   <option>Maharastra</option>
       <option>Karnataka</option>
		   <option>TamilNadu</option>
		   <option>Kerala</option>
           <option>AndraPradesh</option>
	 </select>
      </div>
      </fieldset>
      <fieldset>
        <legend>Course Information</legend>
      <div className="form-group">
        <label htmlFor="selectcourse">SelectCourse:</label>
        <select id="selectcourse"
          value={selectcourse}
          onChange={(e) => setSelectcourse(e.target.value)}
          required>
            <option></option>
	          <option>Java Full Stack</option>
	          <option>Python Full Stack</option>
	          <option>Software testing</option>
	        <option>Python DataScience</option>
         </select>
      </div>
      <div className="form-group1">
        <label htmlFor="deliverymode">DeliveryMode:</label>
        <input className="delivery" type="radio" value="Online"
         checked={ deliverymode=== "Online"} onChange={handleOption} /><label>Online</label>
        <input className="delivery" type="radio" value="Offline" 
        checked={deliverymode === "Offline"} onChange={handleOption} /><label>Offline</label>
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required>
         </textarea>
         
      </div>
      </fieldset>
      <br></br>
      {passwordError && <p className="warning">*Passwords do not match*.</p>}
      <button type="submit">Register</button>
    </form>
    </>    
     )
}

export default RegistrationFrom;