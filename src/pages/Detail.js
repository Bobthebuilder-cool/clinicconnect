import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

function Detail(props) {
  const [hospital, setCurrentHospital] = useState(null);
  const navigate = useNavigate();
  const [bookingTime, setBookingTime] = useState(null)
  const [name, setName] = useState("")
  const mapKey = "34b71623dc0985925cf74404e5971a3f";
  const [hospitals] = React.useState([
    {
      //Note to users that the system may need to be refreshed a couple of times before it uses their location.
      id: 1,
      name: "Sunshine Mind Clinic",
      detail:
        "โลกสมาธิสั้น/ Sunshine Mind Clinic บริการด้านสุขภาพจิต พัฒนาการเด็ก ตรวจ IQ กิจกรรมบำบัด สามารถติดต่อได้ที่เบอร์ 080-553-5215 หรือแอดไลน์ sunshinemind มาทำนัดหมายพบหมอปังและทีมงานได้นะครับ ^0^",
      // url: "https://lh5.googleusercontent.com/p/AF1QipN_lcmztS_80aNgDDVjNQ6rL17Sm3X-fSq1_47K=w80-h106-k-no",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "sunshine-mind-clinic",
      geo: { lat: 13.856, lon: 100.6409 },
    },
    {
      id: 2,
      name: "Term Suk Clinic",
      detail:
        "Term Suk Clinic ดูแลภาวะออทิสติก สมาธิสั้น ปัญหาพัฒนาการล่าช้า ปัญหาการเรียน และปัญหาการเลี้ยงดูเด็ก",
      // url: "https://lh5.googleusercontent.com/p/AF1QipP8XvgW3U_vIZ13oPJaIvKV49t_J_BOEBIIVkF6=w408-h544-k-no",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "term-suk-clinic",
      geo: { lat: 13.731734, lon: 100.657303 },
    },
    {
      id: 3,
      name: "Mind & Mood Clinic",
      detail:
        "Mind and Mood Clinic เป็นคลินิกที่เปิดให้บริการดูแลเฉพาะทางด้านสุขภาพจิต ครอบคลุมทุกช่วงวัยตั้งแต่วัยเด็ก วัยรุ่น วัยผู้ใหญ่ และวัยผู้สูงอายุ โดยมีเป้าหมายในการดูแลรักษาผู้ป่วยตั้งแต่เริ่มมีปัญหาทางอารมณ์และพฤติกรรม และเน้นการบำบัดด้วยการพูดคุยในรูปแบบ Cognitive Behavioral Therapy (CBT) โดยทีมจิตแพทย์ผู้เชี่ยวชาญ ซึ่งจบจากสถาบัน Beck Institute หรือผ่านการอบรมการบำบัด CBT ในประเทศไทย Mind & Mood Clinic ได้ออกแบบคลินิกให้มีลักษณะโปร่ง โล่ง สบาย และใกล้ชิดกับธรรมชาติ โดยเน้นให้ผู้ที่มารับบริการรู้สึก ปลอดภัย มีความเป็นส่วนตัว สะดวกสบาย โดยผู้มารับบริการสามารถทำนัดหมายล่วงหน้า และสามารถขอใช้บริการห้องตรวจส่วนตัวได้ เนื่องจากมีบ่อยครั้งที่พบว่าความไม่เป็นส่วนตัวในแผนกจิตเวชของโรงพยาบาล ทำให้ผู้ที่ต้องการความช่วยเหลือไม่กล้าที่จะเดินเข้ามาพบจิตแพทย์ Mind & Mood Clinic จึงต้องการเป็นทางเลือกใหม่สำหรับบุคคลทั่วไปที่ต้องการพัฒนาตนเอง ให้มีสภาพจิตใจ (Mind) และอารมณ์ (Mood) ที่ดีขึ้น อันจะส่งผลให้ผู้มารับบริการสามารถดำเนินชีวิตได้อย่างมีความสุขมากขึ้นต่อไป",
      // url: "https://lh5.googleusercontent.com/p/AF1QipO6-B3sXvpTjlHXwOGatiU6RdZ59W40aJ6kSMOc=w408-h271-k-no",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "mind-and-mood-clinic",
      geo: { lat: 13.83330255904926, lon: 100.57410456241018 },
    },
    {
      id: 4,
      name: "Morning Mind Clinic",
      detail:
        "Morning Mind หรือ รุ่งอรุณแห่งจิตใจ เป็นคำที่เต็มเปี่ยมความหมายและสื่อถึงปณิธานของเราได้เป็นอย่างดี รุ่งอรุณ เป็นสัญลักษณ์ของความหวัง พลัง และความอบอุ่น รุ่งอรุณแห่งจิตใจ จึงหมายถึง จิตใจที่มีความหวัง กำลังใจ และความอุ่นใจ และนี่คือความตั้งใจของเรา ที่จะนำสิ่งเหล่านี้สู่จิตใจของทุกท่าน สำหรับผู้ใหญ่ เราอยากชวนทุกท่านเรียนรู้จิตใจของตัวเอง พัฒนาตัวเองให้เกิดปัญญาเข้าใจความทุกข์ อันจะทำให้เข้าถึง“ความสุขที่แท้จริง” สำหรับเด็ก เราอยากสร้างพื้นฐานชีวิตของเขาให้ดีที่สุด และสิ่งสำคัญในการสร้างก็คือ “ความรัก”ในตัวตนของเด็กอย่างไม่มีเงื่อนไขนั่นเอง ในสังคมปัจจุบันที่เปลี่ยนแปลงอย่างรวดเร็ว เทคโนโลยี AI กำลังจะเข้ามา disrupt ทุกอย่าง แต่สิ่งที่ AI ไม่สามารถเข้ามาแทนที่ได้ก็คือ “ความเป็นมนุษย์” และ “จิตใจ” ของเรา Morning Mind เราเชื่อในความเป็นมนุษย์ เราให้ความสำคัญเรื่องจิตใจ และเราจะอยู่เป็นเพื่อนคู่ใจของทุกท่าน เหมือนดวงตะวันที่อยู่คู่ทุกชีวิต…",
      // url: "https://lh5.googleusercontent.com/p/AF1QipOMCGAGaJSKaf3q1Ct3rq5yh2dmr951ksrxk5_7=w408-h306-k-no",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "morning-mind-clinic",
      geo: { lat: 13.821104144488066, lon: 100.450052046398 },
    },
    {
      id: 5,
      name: "Body & Mind Clinic",
      detail:
        "กายใจคลินิกตั้งอยู่ในใจกลางกรุงเทพมหานคร สามารถติดต่อเข้าถึงง่าย คลินิกได้รับการออกแบบโดยคำนึงถึงความสะดวกและความเป็นส่วนตัวของผู้รับบริการ ทีมงานของกายใจคลินิกมีความรู้และประสบการณ์เชี่ยวชาญในการดูแลผู้ป่วยที่มีปัญหาต่างๆทางจิตเวช รวมถึงปัญหาทางจิตใจที่เชื่อมโยงกับโรคทางกาย ทีมจิตแพทย์ นักจิตบำบัด พยาบาล และ นักสังคมสงเคราะห์ผู้เชี่ยวชาญของกายใจคลินิกพร้อมที่จะให้การดูแลรักษาทางการแพทย์ที่ครอบคลุมในระดับบุคคลทุกช่วงวัยตั้งแต่เด็ก วัยรุ่น ผู้ใหญ่ และผู้สูงอายุ เรามีพันธสัญญาที่จะทำงานร่วมกับผู้รับบริการเป็นศูนย์กลาง รวมถึงครอบครัว คนสำคัญ หรือ ผู้ให้บริการทางการแพทย์สาขาอื่นที่เกี่ยวข้อง เพื่อที่จะสามารถรับฟัง สื่อสาร เข้าใจ สร้างสรรค์แนวทางรักษา และแก้ไขปัญหาที่ท้าทายต่างๆให้ดีที่สุด   เพื่อให้ผู้รับบริการของเราบรรเทาจากความเจ็บป่วยทุกข์ทรมาน มีสุขภาพใจสุขภาพกายที่สบายแจ่มใสขึ้น กลับไปสู่ความเป็นปกติของหน้าที่การงาน มีคุณภาพชีวิตที่ดี พัฒนาฟื้นฟูกลับไปสู่ครอบครัวชุมชนและสังคมของเราทุกคน​",
      // url: "https://lh5.googleusercontent.com/p/AF1QipOmEUL3ErR0IyD-M57ZlakEpBAuEa5k_gvs0TvY=w408-h272-k-no",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "body-and-mind-clinic",
      geo: { lat: 13.73331787675156, lon: 100.52937608137265 },
    },
    {
      id: 6,
      name: "Better Mind Mental Health Services",
      detail:
        "Better Mind Thailand เป็นเครือข่ายนักจิตวิทยาผู้เชี่ยวชาญ นักจิตวิทยาของเราผ่านการฝีกอบรมจากสถาบันที่มีชื่อเสียงด้านการให้คำปรึกษาและ การทำบำบัดด้านจิตใจกับสถาบันที่มีมาตรฐานเป็นที่ยอมรับทั้งในประเทศไทยและในต่างประเทศ นักจิตวิทยาของเรามีใบประกอบวิชาชีพ และชำนาญการเชี่ยวชาญด้านการทำจิตบำบัด เราเป็นสมาชิกและเข้าร่วมการฝึกอบรมพัฒนาวิชาชีพอย่างต่อเนื่องกับสมาคมนักจิตวิทยาแห่งยุโรป และอเมริกา",
      // url: "https://image.makewebeasy.net/makeweb/0/bh4hW6zTx/Home/09___logo_footer.png",
      url: "https://plchldr.co/i/500x150",
      value: 5,
      slug: "better-mind-mental-health-services",
      geo: { lat: 13.820423164998564, lon: 100.6160668313372 },
    },
  ]);
  const { slug } = useParams();
  const [bookingPeriods] = useState([
    "9:00 - 10:00",
    "10:00 - 11:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
  ]);
  let map;
  let longdo = window.longdo;
  const [user,setUser] = useState(null)

  useEffect(() => {
    map = new window.longdo.Map({
      placeholder: document.getElementById("map"),
    });

      const data = localStorage.getItem("@user")
      const objectUser = JSON.parse(data)
      setUser(objectUser)
      setName(objectUser?.displayName)
    
  }, []);
  useEffect(() => {
    const findHospital = hospitals.find((hospital) => hospital.slug === slug);

    if (!findHospital) {
      navigate("/404", { replace: true });
      return;
    }
    setCurrentHospital(findHospital);
    if (map) {
      map.zoom(14, true);

      map.location(window.longdo.LocationMode.Geolocation);
      var result = map.location();
      var Marker = new longdo.Marker(
        { lon: result.lon, lat: result.lat },
        { title: "My Current Location", detail: "I'm here" }
      ); // Create Marker Overlay
      map.Route.add({
        lat: findHospital?.geo?.lat,
        lon: findHospital?.geo?.lon,
      });
      map.Route.add(Marker);

      map.Route.search();
    }
  }, [hospital]);

  const handleChange = (e) => {
    setBookingTime(e.target.value)
  }

  const handleBooking = () => {
    const bookRequest = {
      ...user,
      name,
      time: bookingTime
    }
    console.log(bookRequest)
  }
  return (
    <>
      <img src={hospital?.url} alt={hospital?.name} style={{ width: "100%" }} />
      <Container>
        <h1>{hospital?.name}</h1>
        <Rating name="simple-controlled" value={hospital?.value || null} />
        <p>{hospital?.detail}</p>
        <Box sx={{ marginTop: 10, marginBottom: 4 }}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Booking Time
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChange}
            >
              {/* <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            /> */}
              {bookingPeriods.map((b) => (
                <FormControlLabel
                  key={b}
                  value={b}
                  control={<Radio />}
                  label={b + " น."}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{marginBottom: 2}}>
          {
            user?.pictureUrl &&
            
             <Avatar alt="Profile" src={user?.pictureUrl}  sizes={80} />
           
          }
          
        </Box>
        <Box>
          <TextField
            label="Phone Number"
            id="outlined-size-small"
           
            size="small"
            focused
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Input Contact Number"
          />
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Button onClick={handleBooking} disabled={!bookingTime} variant="contained">Book</Button>
        </Box>
        <div style={{ position: "relative" }}>
          <div id="map" style={{ height: 300 }}></div>
          {/* <div id="result" style={{width: 400, height: '70%', background:'#ccd', position:'absolute', right: 0, top:'15%'}}></div> */}
        </div>
      </Container>
    </>
  );
}

export default Detail;
