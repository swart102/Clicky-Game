import React, { Component } from 'react';
import characters from './characters.json';
import Card from './components/Card';
import Nav from './components/Nav';
import Container from './components/Container';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  state = {
      cards: characters,
      clickedCards: [],
      score: 0,
      highScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleCards(this.state.cards) });
  }

  shuffleCards = cards => {
    let i = cards.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
      i--;
    }
    return cards;
  };
  
  handleWin = () => {
    alert('You Win!');
    
    const newState = {
      clickedCards: [],
      cards: characters,
      score: 0,
      highScore: 0
    };
    
    this.setState(newState);
  };
  
  handleLoss = () => {
    if(this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score})
    };
    
    alert('You Lose.');
    
    const newState = {
      clickedCards: [],
      cards: characters,
      score: 0
    };
    
    this.setState(newState);
  };
  
    cardClicked = id => {
      if (this.state.clickedCards.includes(id)) {
        this.handleLoss();
  
      } else {
        this.state.clickedCards.push(id);
        this.setState({ score: this.state.score + 1});
  
        if(parseInt(this.state.score + 1) === parseInt(this.state.cards.length)) {
          this.handleWin();
  
        } else {
          const newCards = this.shuffleCards(this.state.cards);
          this.setState({ cards: newCards });
  
        };
      };
    };

  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Header />
         <Container>
            {
              this.state.cards.map(card => (
                <Card
                  id={card.id}
                  key={card.id}
                  image={card.image}
                  shuffle={this.cardClicked}
                />))
            }
          </Container>
        <Footer />
      </div>
    );
  }
};
export default App;