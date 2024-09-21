import React from "react";
import Slider from "../components/slider/MySlider";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaGift, FaBullseye } from 'react-icons/fa';
import './Contact.css';
const Contact =()=>{
    return(
<>
            {/* <Header/>*/}
            <Slider/> 
      <section className="about-contact-section py-5">
       <Container>
        {/* Header Section */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-6">Haqqımızda və Əlaqə</h2>
          </Col>
        </Row>

        {/* Description Section */}
        <Row>
          <Col xs={12} md={6}>
          <p style={{color:'rgba(0, 0, 0, 0.40)'}}>
          Azərbaycanda istedadlı sənətkarlardan əldə edilən unikal əl işləri və hədiyyələr üçün əsas məkanınız olan RB Mobiliya-ə xoş gəlmisiniz.
           Özünüzə və ya  xüsusi kimsəyə ideal hədiyyə tapmaq üçün mükəmməl olan yüksək keyfiyyətli məhsullar və fərdiləşdirilmiş əşyaların geniş seçimini təklif etməkdən qürur duyuruq.
            </p>
            <p style={{color:'rgba(0, 0, 0, 0.40)'}}>
            “RB Mobiliya olaraq biz yerli sənətkarları dəstəkləməyə və sosial biznesi inkişaf etdirməyə inanırıq.
             Platformamız hər yaşda və Azərbaycanın müxtəlif bölgələrindən olan vətəndaşlara öz müstəsna sənətkarlıqlarını nümayiş etdirmək üçün bazar yeri təqdim
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p style={{color:'rgba(0, 0, 0, 0.40)'}}>
            Biz nəfis əl işləri, yeməli hədiyyələr və sənətkarlıq həvəskarları üçün ləvazimat və materiallar da daxil olmaqla müxtəlif çeşidli əl istehsalı məhsulları seçirik. 
              Fərdi təcrübələrə diqqət yetirərək, biz alış-veriş səyahətinizi qüsursuz və zövqlü etməyə çalışırıq. 
            </p>
            <p style={{color:'rgba(0, 0, 0, 0.40)'}}>
            Veb saytımız rahat seçim prosesini təklif edir ki, bu da sizə asanlıqla gözdən keçirməyə və seçimlərinizə uyğun olaraq fərdiləşdirilmiş əl istehsalı məhsulları seçməyə imkan verir. 
            Biz yüksək keyfiyyətli qablaşdırma təmin etməkdən qürur duyuruq və seçdiyiniz əşyaları gözəl təqdim olunmuş hədiyyə qutusunda çatdırmaq variantını təklif edirik.
            </p>
          </Col>
        </Row>
        </Container>
        </section>
        {/* Cards Section */}
        <section className="info-cards py-5">
      <Container>
        <Row className="g-4">
          {/* Card 1 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Əsas ünvan</h5>
                </div>
                <Card.Text>
                  Bizi rahat şəkildə Üzeyir Hacıbəyov 26b, ünvanında tapa bilərsiniz. Bizim xüsusi komandamız sizə lazım ola biləcək hər hansı sorğu və ya dəstəyi ilə kömək etməyə hazırdır. Saat 11:00-19:00 arası iş saatlarımız ərzində +994709515979 nömrəsi ilə əlaqə saxlaya bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaPhoneAlt size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Əlaqə</h5>
                </div>
                <Card.Text>
                  Fərdi məhsul sifarişləri və hər hansı xüsusi tələblər üçün bizimlə əlaqə saxlayın. aynur.ozel@mail.ru elektron poçt ünvanı və ya +994705992656 nömrəsi ilə birbaşa əlaqə saxlayın.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGift size={24} className="text-warning me-3" />
                  <h5 className="text-warning mb-0">Təklif Edirik</h5>
                </div>
                <Card.Text>
                  Müəyyən alış məbləğləri ilə siz pulsuz çatdırılma, pulsuz hədiyyə paketi və eksklüziv kuponlar ilə promo kodlar kimi xüsusi üstünlüklərdən istifadə edə bilərsiniz. Yaradıcı bacarıqlarınızı inkişaf etdirmək üçün endirim kuponları təklif edirik.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} md={6} lg={6}>
            <Card className="h-100 border-0 ">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                <FaBullseye style={{color:'white'}} size={24} className="text-warning me-3" />

                  <h5 className="text-warning mb-0">Məqsədimiz</h5>
                </div>
                <Card.Text>
                  Unudulmaz müştəri təcrübəsini təmin etmək üçün biz bir sıra əlavə xidmətlər təklif edirik. Sərgi salonumuzda əşyaların istehsalı və detalları haqqında məlumat ala bilərsiniz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
      
            {/* <Footer/> */}

</>
    );
};
export default Contact;