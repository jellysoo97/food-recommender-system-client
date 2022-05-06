import React from "react"
import "../index.css"

const bgImg = require("../images/bg.png")
const cardImg1 = require("../images/card_nutrient.png")
const cardImg2 = require("../images/card_vegi.png")
const cardImg3 = require("../images/card_recipe.png")

function LandingPage() {
  const CardRow = () => {
    const Row = ({ src, alt, title, desc }) => {
      return (
        <div className="col-3 card m-3 p-3 text-center">
          <div className="card-img-top my-1">
            <img
              className="center-block"
              src={src}
              alt={alt}
              width={"100px"}
              height={"100px"}
            />
          </div>
          <div className="card-body">
            <h4
              className="card-title"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              {title}
            </h4>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      )
    }
    return (
      <>
        <div className="row text-center">
          <div>영양성분, 남은 재료, 사용자의 성향까지 고려한 맞춤형 레시피</div>
        </div>
        <div className="row text-center">
          <Row
            src={cardImg1}
            alt={"영양성분"}
            title={"영양소 균형잡힌 메뉴 추천"}
            desc={
              "입력한 재료로 조리가능한 메뉴 선별 영양성분을 고려하여 가장 영양가 있는 메뉴 추천"
            }
          />
          <Row
            src={cardImg2}
            alt={"알레르기"}
            title={"사용자 성향을 고려한 메뉴 추천"}
            desc={"비슷한 성향의 사용자들이 선호하는 메뉴 추천"}
          />
          <Row
            src={cardImg3}
            alt={"레시피"}
            title={"전메뉴 레시피 및 영양성분 제공"}
            desc={"추천받은 메뉴에 대한 레시피 및 영양성분 제공"}
          />
        </div>
      </>
    )
  }
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12">
            <div>나는 뭐 먹지</div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <div>
              개인 맞춤형 메뉴 추천 서비스
              <br />
              비건, 알레르기 등 사용자 성향을 고려한 메뉴를 추천받고 싶다면?
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <CardRow />
      </div>
      <div className="container-fluid" style={{ background: "#A8BA88" }}>
        <div className="row">
          <div className="col-4">
            총 레시피 수<br />
            1,000
          </div>
          <div className="col-4">
            총 사용자 수<br />
            100
          </div>
          <div className="col-4">
            총 선호도 평가 수<br />
            200
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
