import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Food from "@/components/Food";
import Container from "@/components/Container";
import Grid from "@/components/Grid";
import Modal from "@/components/Modal";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });
/*<main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
>*/
export default function Home() {
    const [isOpen,setIsOpen] = useState(false);
  return (
<>
    <Layout />
    <main>
        <Container>
            <div className='header'>
                <h1>
                    Delicious meals, created {' '}
                    <span className='highlight'>
                by you
              </span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <Button onClick={()=> setIsOpen(true)}>
                    Share Your Favorite Recipe
                </Button>
                <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)} >
                   <h2 className='spec-heading'>
                       Soon, you will be able to add your recipe.
                   </h2>
                </Modal>
            </div>
            <Grid>
                   <Food image='/images/burger.jpg' title='Juicy Cheese Burger'
                      creator='by John Doe' summary='A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.' />
                   <Food image='/images/curry.jpg' title='Spicy Curry'
                      creator='by Max Schwarz' summary='A rich and spicy curry, infused with exotic spices and creamy coconut milk.' />
                   <Food image='/images/dumplings.jpg' title='Homemade Dumplings'
                      creator='by Emily Chen' summary='Tender dumplings filled with savory meat and vegetables, steamed to perfection.' />
                <Food image='/images/macncheese.jpg' title='Classic Mac & Cheese'
                      creator='by Emily Chen' summary='Tender dumplings filled with savory meat and vegetables, steamed to perfection.' />
                <Food image='/images/pizza.jpg' title='Authentic Pizza'
                      creator='by Emily Chen' summary='Tender dumplings filled with savory meat and vegetables, steamed to perfection.' />
            </Grid>
        </Container>
    </main>
</>
  )}

export const getStaticProps = (async () => {
    return {
        revalidate: false,
        props: {}
    }
})