const countDuration = require ("./CountTimeDuration")

const insertData = (data) => {
    let projectName = data.projectName;
    let startDate = data.startDate;
    let endDate = data.endDate;
    let description = data.description;
  
    let technologyIcon = [];
    let detailTechnology = [];
  
    let reactJs = data.reactJs;
    let nodeJs = data.nodeJs;
    let nextJs = data.nextJs;
    let typeScript = data.typeScript;
  
    if (reactJs !== undefined) {
      technologyIcon.push(`<i class="fa-brands fa-react"></i>`);
      detailTechnology.push(
        `<span><i class="fa-brands fa-react"></i><p>react js</p></span>`
      );
    }
  
    if (nodeJs !== undefined) {
      technologyIcon.push(`<i class="fa-brands fa-node-js"></i>`);
      detailTechnology.push(
        `<span><i class="fa-brands fa-node-js"></i><p>Node Js</p></span>`
      );
    }
  
    if (nextJs !== undefined) {
      technologyIcon.push(
        `<img src="assets/icon/next-js_1.svg" style="height: 25px; width: 25px;"></img>`
      );
      detailTechnology.push(`<span>
      <img src="../assets/icon/next-js_1.svg" style="height: 25px; width: 25px;"></img>
      <p>Next Js</p>
    </span>`);
    }
  
    if (typeScript !== undefined) {
      technologyIcon.push(
        `<img src="assets/icon/icons8-typescript-500.svg" style="height: 25px; width: 25px;"></img>`
      );
      detailTechnology.push(`<span>
      <img src="../assets/icon/icons8-typescript-500.svg" style="height: 20px; width: 20px;"></img>
      <p>typeScript</p>
    </span>`);
    }
  
    const image =
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimsQwsSOBn-XDL_vZI4c4_nM8xS2qqY5ejxFELDDn6vd4gvRBUAtaSYwGDxYmtjdCU1dL1RUQCBsTpAVh0PnjFnvEARajDVcnbdBRCkfuaelU1QkuhkleOsuvq1FqRh-fFBZaxvo-7-96cJSMYPe2XlrcFj7COJ-_53hYzxRGya9a7Ybi-Y4KqLork/w1200-h630-p-k-no-nu/Prabowo%20Subianto%20PNG.png";
  
    let elementDetilIcon = detailTechnology.join("");
    let elementCardIcon = technologyIcon.join("");
    if (
      projectName !== undefined &&
      startDate !== "" &&
      endDate !== "" &&
      endDate >= startDate &&
      description !== ""
    ) {
      let timeDuration = countDuration(startDate, endDate);
      datum = {
        projectName,
        startDate,
        endDate,
        description,
        timeDuration,
        elementCardIcon,
        elementDetilIcon,
        image,
      };
  
      return datum
    } else {
      console.log("data tidak lengkap")
    }
  }

  module.exports = insertData
  