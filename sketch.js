let estrelas = [];

function setup() {

  createCanvas(600, 400);

  // Criar estrelas
  for (let i = 0; i < 30; i++) {

    estrelas.push({
      x: random(width),
      y: random(height),
      tamanho: random(3, 6)
    });
  }
}

function draw() {

  background(10, 10, 30);

  // Desenhar conexões
  stroke(100, 150, 255);

  for (let i = 0; i < estrelas.length; i++) {

    for (let j = i + 1; j < estrelas.length; j++) {

      let distancia = dist(
        estrelas[i].x,
        estrelas[i].y,
        estrelas[j].x,
        estrelas[j].y
      );

      if (distancia < 100) {

        line(
          estrelas[i].x,
          estrelas[i].y,
          estrelas[j].x,
          estrelas[j].y
        );
      }
    }
  }

  // Desenhar estrelas
  noStroke();
  fill(255);

  for (let estrela of estrelas) {

    circle(
      estrela.x,
      estrela.y,
      estrela.tamanho
    );
  }
}