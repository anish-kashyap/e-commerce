import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { FaPinterest} from "@react-icons/all-files/fa/FaPinterest";
import { FaMapMarked} from "@react-icons/all-files/fa/FaMapMarked";
import { IoMdContact} from "@react-icons/all-files/io/IoMdContact";
import { IoIosMail} from "@react-icons/all-files/io/IoIosMail";

const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center=styled.div`
    flex:1;
    padding: 20px;
`

const Title=styled.h3`
margin-bottom:30px;`

const List=styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;`

const ListItem=styled.li`
width:50%;
margin-bottom:10px ;
`

const Right=styled.div`
    flex:1;
    padding: 20px;
    
`
const Logo=styled.h1`
    
`

const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer= styled.div`
    display: flex;
`
const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const ContactItem= styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment=styled.img`
    width: 100%;
`


const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>ECOMM.</Logo>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    am magni in eligendi similique, distinctio repellat 
                    
                    si odio iure reprehenderit. Accusantium magnam voluptatem optio 
                    utem porro! Voluptatum, autem distinctio.</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999"><AiFillFacebook/></SocialIcon>
                    <SocialIcon color="e4405f"><AiFillInstagram/></SocialIcon>
                    <SocialIcon color="55acee"><AiFillTwitterCircle/></SocialIcon>
                    <SocialIcon color="e60023"><FaPinterest/></SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Mens Fashion</ListItem>
                    <ListItem>Womens fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Traking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Condition</ListItem>
                    <ListItem>Desc</ListItem>
                    <ListItem>Sitemap</ListItem>

                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <FaMapMarked style={{marginRight:"10px"}}/>Guwahati, Assam Engineering College
                </ContactItem>
                <ContactItem>
                    <IoMdContact style={{marginRight:"10px"}}/>+0 1800 7890 89
                </ContactItem>
                <ContactItem>
                    <IoIosMail style={{marginRight:"10px"}}/>contact@assamengineeringcollege.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
