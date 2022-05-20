import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../../components/back-button/back-button';
import RouterSlider from '../../components/router-slider/router-slider';

// Styles
import styles from './neural-tarot-page.module.scss';

function NeuralTarotPage() {
  const { data } = useSelector((store) => store.projects);
  const tarotContent = data.find((el) => el.name === 'neural tarot').content;

  useEffect(() => { }, []);
  return (
    <RouterSlider>
      <div className={`${styles.wrapper}`}>
        <BackButton />
        <div className={`${styles.contentWrapper}`}>
          <div className={`${styles.header}`}>
            <h1>Neural tarot (2021)</h1>
            <h2>(Cultural code)</h2>
          </div>
          <i className={`${styles.paragraph}`}>
            Neural Tarot — the Tarot cards of the 21st century — was created with
            artificial intelligence trained on the visual codes of different
            cultures: the database used by the neural network consists of
            over one hundred examples of decks created from the 15th century to the present day.
          </i>
          <img src={tarotContent.items[0].src} alt="Taro cards" />
          <div className={`${styles.video}`}>
            <iframe
              width="1012"
              height="510"
              src="https://www.youtube.com/embed/YgvUVejzR4s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className={`${styles.paragraph}`}>
            A cultural code is a form of lived experience, a trace left on the collective body of
            culture. It absorbs and transmits knowledge about the world, its peculiarities and way
            of life in a certain historical period.
          </p>
          <img src={tarotContent.items[1].src} alt="Taro card" />
          <p className={`${styles.paragraph}`}>
            Tarot cards are one of the brightest examples of the cultural code and represent a
            system of rules and images, fixed in the human consciousness.
          </p>
          <div className={`${styles.imgsGroup}`}>
            <img src={tarotContent.items[2].src} alt="Taro cards" />
            <img src={tarotContent.items[3].src} alt="Taro cards" />
          </div>
          <p className={`${styles.paragraph}`}>
            Different images are relevant for each time, so different tarot decks reflect
            the spirit of their time. Compare, for example, the Visconti-Sforza deck (1451)
            and Lisa Steele&apos;s Modern Witch (2019)
          </p>
          <div className={`${styles.imgsAndText}`}>
            <img src={tarotContent.items[4].src} alt="Taro cards" />
            <div className={`${styles.textSection}`}>
              <p className={`${styles.paragraph}`}>
                Technologies became an integral part of our life, which means they have a
                significant impact in shaping the cultural code of modern society. Previously,
                people independently chose the visual appearance for symbols endowing them
                with important social meanings.
              </p>
              <p className={`${styles.paragraph}`}>
                Now the function of making meanings and visualising them is proposed to be
                performed by a machine that already determines our lives.
              </p>
            </div>
          </div>
          <p className={`${styles.paragraph}`}>
            Neural Tarot - Tarot cards of the 21st century - were created using artificial
            intelligence trained on the visual codes of various cultures: the database used
            by the neural network consists of more than one hundred examples of Tarot decks
            from the 15th century to the present day.
          </p>
          <div className={`${styles.imgsGroup}`}>
            <img src={tarotContent.items[5].src} alt="Taro cards" />
            <img src={tarotContent.items[5].src} alt="Taro cards" />
            <img src={tarotContent.items[5].src} alt="Taro cards" />
          </div>
          <p className={`${styles.paragraph}`}>
            The possibility of transforming the abstract concept of &ldquo;Culture Code&rdquo;
            into a concrete object created with the help of precise mathematical calculations and
            computer technology is a great opportunity we have.
          </p>
          <div>
            <img src={tarotContent.items[8].src} alt="Taro cards" />
          </div>
          <p className={`${styles.paragraph}`}>
            Neural Tarot as an art object combined the sensual and the rational, connecting
            the past with the present, literally &ldquo;flowing&rdquo; into the future with
            the depicted fluid images on the cards, became a way to look deeper into the
            human environment.
          </p>
          <div className={`${styles.imgsGroup}`}>
            <img src={tarotContent.items[5].src} alt="Taro cards" />
            <img src={tarotContent.items[6].src} alt="Taro cards" />
            <img src={tarotContent.items[7].src} alt="Taro cards" />
          </div>
          <div>
            В физической колоде 50 карт. По вопросам продажи и экспонирования пишите
            gryozart@gmail.com
          </div>
        </div>
      </div>
    </RouterSlider>
  );
}

export default NeuralTarotPage;
