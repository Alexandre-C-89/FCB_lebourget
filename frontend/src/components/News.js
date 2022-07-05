import React from "react";
import "../style/components/_News.scss";
import Equipe from "../assets/equipe.jpg";

const News = () => {

    // const data = [
    //     {
    //         title:"",
    //         img: "",
    //         text:"",
    //     },
    // ]

  return (
    <div className="news">

        <div className="card">
            <div className="card_title">
                <h3>Nouvelle équipe de dirigeant</h3>
            </div>
            <div className="card_img">
                <img src={Equipe} alt="" />
            </div>
            <div className="card_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus placeat ab? Officia tempora aspernatur, excepturi accusamus expedita, quo unde natus a totam cupiditate, sed dolor error corrupti fugit amet.</p>
            </div>
        </div>

    </div>
  );
};

export default News;
