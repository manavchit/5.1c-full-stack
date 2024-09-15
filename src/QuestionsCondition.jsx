import React, {useState} from "react";
import "./SharedForms.css";

function QuestionsCondition({ onInputChange}) {
    const [form, setForm] = useState({
        Title: "",
        Description: "",
        Tags: "",
    });

    const onChange = (e) => {
        const { value, name }=e.target;

        setForm((state) => ({
            ...state,
            [name]: value,
        
    }));
     onInputChange(name, value);
};

return (
    <div>
        <div className="mainTitle">
            Title
            <input 
                type="text"
                onChange={onChange}
                className="givenInput"
                name="Title"
                value={form.Title}
                placeholder="Start your question with how, what ,why, etc."
                />
                </div>
                <div className="secTitle">Describe your problem</div>
                <textarea
                   onchange={onChange}
                   className="problem"
                   name="Description"
                   value={form.Description}
                   type="text"
                 />
                 <div className="secTitle">
                   Tags
                   <input
                      onchange={onChange}
                      className="givenInput"
                      name="Tags"
                      value={form.Tags}
                      type="text"
                      placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
                    />
                    </div> 
                    </div>
);

}

    
export default QuestionsCondition;