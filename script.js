function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 10.980848620392976, lng: 77.02670194626832 },
    zoom: 18,
    mapId: 'bea4fd4084e83bb9',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    ["Sampath\'s House", 10.980604603486906, 77.02674543076886, "images/yoshi_house.svg", 38, 31],
    ["Ramar Medical\'s", 10.981855603632484, 77.03317854795887, "images/star.svg", 38, 31],
    ["Ghost House", 10.98074109208503, 77.02686722976735, "images/ghosthouse.svg", 40, 37],
    ["Outta No where", 10.980686353337648, 77.02778134971153, "images/pointer.svg", 40, 50],
    ["Fishing Area", 10.982696194003635, 77.02743152538206, "https://img.icons8.com/color/48/000000/fishing-woman.png", 50, 58],
    ["Battle Area", 10.980380760020976, 77.02758605546752, "https://img.icons8.com/fluent/48/000000/pubg.png", 40, 50],
    ["Castle", 10.980382849917149, 77.02713686378726, "images/castle.svg", 40, 50],
    ["Hill", 10.981266631180057, 77.02760245945272, "images/hill_with_eyes.svg", 50, 58],
    ["Magical Pipe", 10.981120338848628, 77.02845826541753, "images/pipe.svg", 50, 58],
    ["Coin", 10.9818782124272, 77.02652651001947, "images/Retro-Coin-icon.png", 50, 58],
    ["Store", 10.981003068401913, 77.02642214551483, "images/Barrel_-_2D_art.png", 38, 40],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMaker = markers[i]

    const marker = new google.maps.Marker({
      position: { lat: currMaker[1], lng: currMaker[2] },
      map,
      title: currMaker[0],
      icon: {
        url: currMaker[3],
        scaledSize: new google.maps.Size(currMaker[4], currMaker[5])
      },
      animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMaker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}


// 10.980604603486906, 77.02674543076886