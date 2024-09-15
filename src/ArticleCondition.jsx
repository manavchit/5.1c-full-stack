import React, {useState} from "react";
import "./SharedForms.css";

function ArticleCondition({ onInputChange}) {
    const [form, setForm] = useState({
        Title: "",
        Abstract: "",
        Article: "",
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
                placeholder="Enter a descriptive title"
                />
                </div>
                <div className="secTitle">Abstract</div>
                <textarea
                   onchange={onChange}
                   className="abstract"
                   name="abstract"
                   value={form.Abstract}
                   placeholder="Enter a 1-paragraph abstarct"
                   type="text"
                 />
                 <div className="secTitle">Article Text</div>
                   <textarea
                   
                      onchange={onChange}
                      className="article"
                      name="Article"
                      value={form.Article}
                      placeholder="Enter the article text"
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
                      placeholder="Please add up to 3 tags to describe the article"
                     
                    />
                    </div> 
                    </div> 
                   
);

}

    
export default ArticleCondition;