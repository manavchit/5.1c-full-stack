import React, { useState } from "react";
import QuestionsConditon from "./QuestionsCondition";
import ArticleConditon from "./ArticleCondition";
import "./ProblemAsk.css";

function ProblemAsk() {
    const [postType, setPostType]= useState("Questions");
    const [formValidation, setFormValidation]= useState({});

    const handleChangePosting=(event) => {
        setPostType(event.target.value);
    };

    const DescText = () => {
        return postType === 'Questions'
        ? 'For post a question, the following section would be appeared.'
        : 'For post an article, the following section would be appeared.'
    }

    const FormSubmissionHandling = () => {
        if (postType === "Questions") {
            const { Title, Description, Tags } = formValidation;
            if (Title && Description && Tags) {
                alert ("Thank you for posting");
                window.location.reload();
            } else{
                alert("Please fill all the fields");
            }
        } else if (postType === "Articles") {
            const { Title, Abstract, Article, Tags} = formValidation;
            if (Title && Abstract && Article && Tags) {
                alert ("Thank you for posting");
                window.location.reload();
            } else{
                alert("Please fill all the fields");
            }
            }
        };

        const handleFormValidation = (name, value) => {
            setFormValidation((prevValidation) => ({
             ...prevValidation,
             [name]: value.trim() !=="",
            }));
        };

        return (
            <div>
                <div className="selectPostType">
                    Select Post Type:
                    <div className="radioButton">
                        <input
                        type="radio"
                        name="Post Type"
                        value="Questions"
                        checked={postType === "Questions"}
                        onChange={handleChangePosting}
                        />
                        Questions
                        </div>
                        <div>
                        <input
                        type="radio"
                        name="Post Type"
                        value="Articles"
                        checked={postType === "Articles"}
                        onChange={handleChangePosting}
                    />
                    Articles
                    </div>
                    </div>
                    <div className="formstart">
                    <div className="formitems">What do you want to ask or share?</div>
                    </div>

                    <div className="myText">
                        <p>
                          <b>This section is designed based on type of post. it could be developed by conditional rendering.{" "}
                           <span style={{color: 'red'}}>{DescText()}</span>
                            </b>  
                        </p>
            </div>

            {postType === "Questions" && <QuestionsConditon onInputChange={handleFormValidation} />}
            {postType === "Articles" && <ArticleConditon onInputChange ={handleFormValidation} />}

            <div className="button">
                <button className="buttonDesign" onClick={FormSubmissionHandling}>
                    Post
                </button>
            </div>
            </div>
    );
    }
    

    export default ProblemAsk;