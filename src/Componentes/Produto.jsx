import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import style from   './Produto.module.css';

export function Produto() {
    return (
        <CardGroup className={style.produto}>
        <Card>
            <Card.Img variant="top"  style={{width:'180px',height:'170px'}} src="https://trickdroid.org/wp-content/uploads/2019/11/12-Pecas-do-computador-que-voce-precisa-conhecer-Importante.jpg" />
            <Card.Body>
            <Card.Title>Pc Gamer 16Gb Ram<br></br>R$1.000</Card.Title>
            </Card.Body>
            <Button variant="primary">Compre Agora!</Button>
        </Card>
        <Card>
        <Card.Img variant="top"  style={{width:'180px',height:'170px'}} src="https://i5.walmartimages.com/asr/07c38307-9678-4450-b190-c0b384f4ed6c_1.fe881ef2cc4bb838e516fff313c4b559.jpeg" />
            <Card.Body>
            <Card.Title>Monitor Full HD Phillips<br></br>R$560.00</Card.Title>
            </Card.Body>
            <Button variant="primary">Compre Agora!</Button>
        </Card>
        <Card>
        <Card.Img variant="top"  style={{width:'180px',height:'170px'}} src="https://http2.mlstatic.com/mouse-gamer-profesional-7-botones-led-pc-mac-optico-barato-D_NQ_NP_672631-MCO27087512731_032018-F.jpg" />
            <Card.Body>
            <Card.Title>Mouse Professional<br></br> Gamer<br></br>R$260,00</Card.Title>
            </Card.Body>
            <Button variant="primary">Compre Agora!</Button>
        </Card>
        </CardGroup>
    );
}
