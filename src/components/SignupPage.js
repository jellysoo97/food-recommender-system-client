import React from 'react';
// import './signupPrac.css';

function SignupPage(){
  return(
    <body>
      <div className="signup">
        <h1>나는 뭐 먹지</h1>
        <form>
          <label><span>아이디</span><input type="text"/></label>
          <label><span>비밀번호</span><input type="password"/></label>
          <label><span>성별</span>
          <select name="1">
            <option value="1" selected>남자</option>
            <option value="2">여자</option>
          </select>
          </label>
          <label><span>나이</span>
          <select name="age">
            <option value="10" >10대</option>
            <option value="20" selected>20대</option>
            <option value="30" >30대</option>
            <option value="40" >40대</option>
            <option value="50" >50대</option>
            <option value="60" >60대</option>
            <option value="70" >70대</option>
            <option value="80" >80대</option>
            <option value="90" >90대</option>
          </select>
          </label>
          <label>
            <span>채식주의자이신가요?</span>
          <select name="veg">
            <option value="Y">네</option>
            <option value="N" selected>아니오</option>
          </select>
          </label>
          <label>
            <span>어느 유형에 속하시나요?</span>
          <select name="vegtype">
            <option value="fruitarian" selected>프루테리언(fruitarian)</option>
            <option value="vegan">비건(vegan)</option>
            <option value="lacto-vegetarian">락토 베지테리언(lacto-vegetarian)</option>
            <option value="ovo-vegetarian">오보 베지테리언(ovo-vegetarian)</option>
            <option value="lacto-ovo-vegetarian">락토오보 베지테리언(lacto-ovo-vegetarian)</option>
            <option value="pesco-vegetarian">페스코 베지테리언(pesco-vegetarian)</option>
            <option value="pollo-vegetarian">폴로 베지테리언(pollo-vegetarian)</option>
          </select>
          </label>
          <label>
            <span>알레르기가 있으신가요?</span>
          <select name="allergy">
            <option value="Y">네</option>
            <option value="N" selected>아니오</option>
          </select>
          </label>
          <label>주의해야할 알레르기 성분에 체크해 주세요</label>
          <label>항상 보유중인 식자재에 체크해 주세요</label>
        </form> 
      </div>
    </body>
  )
}
export default SignupPage;