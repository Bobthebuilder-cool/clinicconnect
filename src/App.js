import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
const liff = window.liff;

export default function App() {
  React.useEffect(() => {
    (async () => {
      await liff.init({ liffId: "1657306969-j5Z40Noa" }).catch((err) => {
        throw err;
      });
      if (liff.isLoggedIn()) {
        let userProfile = await liff.getProfile();
        if(userProfile){
          localStorage.setItem("@user",JSON.stringify(userProfile))
        }
      } else {
        await liff.login();
      }
    })();
  }, []);
  const [hospitals] = React.useState([
    {
      id: 1,
      name: "Sunshine Mind Clinic",
      detail:
        "โลกสมาธิสั้น/ Sunshine Mind Clinic บริการด้านสุขภาพจิต พัฒนาการเด็ก ตรวจ IQ กิจกรรมบำบัด สามารถติดต่อได้ที่เบอร์ 080-553-5215 หรือแอดไลน์ sunshinemind มาทำนัดหมายพบหมอปังและทีมงานได้นะครับ ^0^",
      // url: "https://lh5.googleusercontent.com/p/AF1QipN_lcmztS_80aNgDDVjNQ6rL17Sm3X-fSq1_47K=w80-h106-k-no",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "sunshine-mind-clinic",
    },
    {
      id: 2,
      name: "Term Suk Clinic",
      detail:
        "Term Suk Clinic ดูแลภาวะออทิสติก สมาธิสั้น ปัญหาพัฒนาการล่าช้า ปัญหาการเรียน และปัญหาการเลี้ยงดูเด็ก",
      // url: "https://lh5.googleusercontent.com/p/AF1QipP8XvgW3U_vIZ13oPJaIvKV49t_J_BOEBIIVkF6=w408-h544-k-no",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "term-suk-clinic",
    },
    {
      id: 3,
      name: "Mind & Mood Clinic",
      detail:
        "Mind and Mood Clinic เป็นคลินิกที่เปิดให้บริการดูแลเฉพาะทางด้านสุขภาพจิต ครอบคลุมทุกช่วงวัยตั้งแต่วัยเด็ก วัยรุ่น วัยผู้ใหญ่ และวัยผู้สูงอายุ โดยมีเป้าหมายในการดูแลรักษาผู้ป่วยตั้งแต่เริ่มมีปัญหาทางอารมณ์และพฤติกรรม และเน้นการบำบัดด้วยการพูดคุยในรูปแบบ Cognitive Behavioral Therapy (CBT) โดยทีมจิตแพทย์ผู้เชี่ยวชาญ ซึ่งจบจากสถาบัน Beck Institute หรือผ่านการอบรมการบำบัด CBT ในประเทศไทย Mind & Mood Clinic ได้ออกแบบคลินิกให้มีลักษณะโปร่ง โล่ง สบาย และใกล้ชิดกับธรรมชาติ โดยเน้นให้ผู้ที่มารับบริการรู้สึก ปลอดภัย มีความเป็นส่วนตัว สะดวกสบาย โดยผู้มารับบริการสามารถทำนัดหมายล่วงหน้า และสามารถขอใช้บริการห้องตรวจส่วนตัวได้ เนื่องจากมีบ่อยครั้งที่พบว่าความไม่เป็นส่วนตัวในแผนกจิตเวชของโรงพยาบาล ทำให้ผู้ที่ต้องการความช่วยเหลือไม่กล้าที่จะเดินเข้ามาพบจิตแพทย์ Mind & Mood Clinic จึงต้องการเป็นทางเลือกใหม่สำหรับบุคคลทั่วไปที่ต้องการพัฒนาตนเอง ให้มีสภาพจิตใจ (Mind) และอารมณ์ (Mood) ที่ดีขึ้น อันจะส่งผลให้ผู้มารับบริการสามารถดำเนินชีวิตได้อย่างมีความสุขมากขึ้นต่อไป",
      // url: "https://lh5.googleusercontent.com/p/AF1QipO6-B3sXvpTjlHXwOGatiU6RdZ59W40aJ6kSMOc=w408-h271-k-no",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "mind-and-mood-clinic",
    },
    {
      id: 4,
      name: "Morning Mind Clinic",
      detail:
        "Morning Mind หรือ รุ่งอรุณแห่งจิตใจ เป็นคำที่เต็มเปี่ยมความหมายและสื่อถึงปณิธานของเราได้เป็นอย่างดี รุ่งอรุณ เป็นสัญลักษณ์ของความหวัง พลัง และความอบอุ่น รุ่งอรุณแห่งจิตใจ จึงหมายถึง จิตใจที่มีความหวัง กำลังใจ และความอุ่นใจ และนี่คือความตั้งใจของเรา ที่จะนำสิ่งเหล่านี้สู่จิตใจของทุกท่าน สำหรับผู้ใหญ่ เราอยากชวนทุกท่านเรียนรู้จิตใจของตัวเอง พัฒนาตัวเองให้เกิดปัญญาเข้าใจความทุกข์ อันจะทำให้เข้าถึง“ความสุขที่แท้จริง” สำหรับเด็ก เราอยากสร้างพื้นฐานชีวิตของเขาให้ดีที่สุด และสิ่งสำคัญในการสร้างก็คือ “ความรัก”ในตัวตนของเด็กอย่างไม่มีเงื่อนไขนั่นเอง ในสังคมปัจจุบันที่เปลี่ยนแปลงอย่างรวดเร็ว เทคโนโลยี AI กำลังจะเข้ามา disrupt ทุกอย่าง แต่สิ่งที่ AI ไม่สามารถเข้ามาแทนที่ได้ก็คือ “ความเป็นมนุษย์” และ “จิตใจ” ของเรา Morning Mind เราเชื่อในความเป็นมนุษย์ เราให้ความสำคัญเรื่องจิตใจ และเราจะอยู่เป็นเพื่อนคู่ใจของทุกท่าน เหมือนดวงตะวันที่อยู่คู่ทุกชีวิต…",
      // url: "https://lh5.googleusercontent.com/p/AF1QipOMCGAGaJSKaf3q1Ct3rq5yh2dmr951ksrxk5_7=w408-h306-k-no",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "morning-mind-clinic",
    },
    {
      id: 5,
      name: "Body & Mind Clinic",
      detail:
        "กายใจคลินิกตั้งอยู่ในใจกลางกรุงเทพมหานคร สามารถติดต่อเข้าถึงง่าย คลินิกได้รับการออกแบบโดยคำนึงถึงความสะดวกและความเป็นส่วนตัวของผู้รับบริการ ทีมงานของกายใจคลินิกมีความรู้และประสบการณ์เชี่ยวชาญในการดูแลผู้ป่วยที่มีปัญหาต่างๆทางจิตเวช รวมถึงปัญหาทางจิตใจที่เชื่อมโยงกับโรคทางกาย ทีมจิตแพทย์ นักจิตบำบัด พยาบาล และ นักสังคมสงเคราะห์ผู้เชี่ยวชาญของกายใจคลินิกพร้อมที่จะให้การดูแลรักษาทางการแพทย์ที่ครอบคลุมในระดับบุคคลทุกช่วงวัยตั้งแต่เด็ก วัยรุ่น ผู้ใหญ่ และผู้สูงอายุ เรามีพันธสัญญาที่จะทำงานร่วมกับผู้รับบริการเป็นศูนย์กลาง รวมถึงครอบครัว คนสำคัญ หรือ ผู้ให้บริการทางการแพทย์สาขาอื่นที่เกี่ยวข้อง เพื่อที่จะสามารถรับฟัง สื่อสาร เข้าใจ สร้างสรรค์แนวทางรักษา และแก้ไขปัญหาที่ท้าทายต่างๆให้ดีที่สุด   เพื่อให้ผู้รับบริการของเราบรรเทาจากความเจ็บป่วยทุกข์ทรมาน มีสุขภาพใจสุขภาพกายที่สบายแจ่มใสขึ้น กลับไปสู่ความเป็นปกติของหน้าที่การงาน มีคุณภาพชีวิตที่ดี พัฒนาฟื้นฟูกลับไปสู่ครอบครัวชุมชนและสังคมของเราทุกคน​",
      // url: "https://lh5.googleusercontent.com/p/AF1QipOmEUL3ErR0IyD-M57ZlakEpBAuEa5k_gvs0TvY=w408-h272-k-no",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "body-and-mind-clinic",
    },
    {
      id: 6,
      name: "Better Mind Mental Health Services",
      detail:
        "Better Mind Thailand เป็นเครือข่ายนักจิตวิทยาผู้เชี่ยวชาญ นักจิตวิทยาของเราผ่านการฝีกอบรมจากสถาบันที่มีชื่อเสียงด้านการให้คำปรึกษาและ การทำบำบัดด้านจิตใจกับสถาบันที่มีมาตรฐานเป็นที่ยอมรับทั้งในประเทศไทยและในต่างประเทศ นักจิตวิทยาของเรามีใบประกอบวิชาชีพ และชำนาญการเชี่ยวชาญด้านการทำจิตบำบัด เราเป็นสมาชิกและเข้าร่วมการฝึกอบรมพัฒนาวิชาชีพอย่างต่อเนื่องกับสมาคมนักจิตวิทยาแห่งยุโรป และอเมริกา",
      // url: "https://image.makewebeasy.net/makeweb/0/bh4hW6zTx/Home/09___logo_footer.png",
      url: "https://plchldr.co/i/500x250",
      value: 5,
      slug: "better-mind-mental-health-services",
    },
  ]);
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: 50 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {hospitals.map((h, index) => {
            const routePath = "/detail/" + h.slug;
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    alt={h.name}
                    src={h.url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {h.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {h.detail}
                    </Typography>
                    <Rating name="simple-controlled" value={h.value} />
                  </CardContent>
                  <CardActions>
                    <Link href={routePath} underline="hover">
                      View {h.name}
                    </Link>
                    {/* <Button size="small">Book</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
