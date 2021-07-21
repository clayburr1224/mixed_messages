const generateMessage = () => {
    const rando = Math.floor(Math.random() * 8);
    const rando2 = Math.floor(Math.random() * 8);
    const rando3 = Math.floor(Math.random() * 8);
    const action = ['eat soup', 'play basketball', 'get married', 'exercise', 'get drunk', 'use vulgar language', 'code', 'get sick'];
    const place = ['outside', 'indoors', 'in a cave', 'on the beach', 'on the side of a mountain', 'at a place of business', 'at your neighbor\'s house', 'at the gym'];
    const event = ['during a snowstorm', 'during a celebration', 'while at work', 'during a hurricane', 'while on a first date', 'on your birthday', 'on your anniversary', 'during an earthquake'];
    console.log(`Mixed Messages says: Never ${action[rando]} ${place[rando2]} ${event[rando3]}.`);
  }
  
  
  generateMessage();