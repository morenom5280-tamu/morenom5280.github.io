// ---------- NODES ----------
const nodes = new vis.DataSet([
  { id: 1, label: "Media Usage", size: 40, color: "#FFA500"},

  // MAIN CATEGORIES
  { id: 2, label: "Moving Images (Consumer)", size: 30, color: "#efd062ff" },
  { id: 3, label: "Audio (Consumer)" , size: 30, color: "#f65252ff"},
  { id: 4, label: "Games (Consumer)", size: 30, color: "#800080"},
  { id: 5, label: "Still Images (Consumer / Generator)" , size: 30, color: "#008000"},
  { id: 6, label: "Text-based Media (Consumer / Generator)", size: 30, color: "#00467bff"},

  // MOVING IMAGES
  { id: 20, label: "Television Shows", color: "#eed888ff" },
  { id: 21, label: "Movies", color: "#eed888ff" },
  { id: 22, label: "Streaming Services" , color: "#eed888ff"},

  //MOVING IMAGES SUBCATEGORIES
  { id: 24, label: "YouTube" , color: "#fdeeb7ff"},
  { id: 25, label: "Grey's Anatomy" , color: "#fdeeb7ff" },
  { id: 26, label: "Lost In Space" , color: "#fdeeb7ff"},
  { id: 27, label: "Netflix", color: "#fdeeb7ff"},
  { id: 28, label: "Animated Movies", color: "#fdeeb7ff" },
  { id: 29, label: "Live Action Movies", color: "#fdeeb7ff" },

  // Audio
  { id: 30, label: "Spotify", color: "#f47676ff"},
  { id: 31, label: "Podcasts", color: "#f47676ff"},
  { id: 32, label: "Audiobooks", color: "#f47676ff"},
  { id: 33, label: "CD's", color: "#f47676ff"},

  //AUDIO SUBCATEGORIES
  { id: 34, label: "Fictional", color: "#f4b9b9ff" },
  { id: 35, label: "Positive", color: "#f4b9b9ff" },
  { id: 36, label: "Sad Music", color: "#f4b9b9ff" },
  { id: 37, label: "Indie/Folk Music", color: "#f4b9b9ff" },
  { id: 38, label: "The Strokes", color: "#f4b9b9ff" },
  { id: 39, label: "Taylor Swift", color: "#f4b9b9ff" },

  // GAMES
  { id: 40, label: "Console Gaming", color: "#cc6cccff"},
  { id: 41, label: "Board/Card Games", color: "#cc6cccff"},

  //GAMES SUBCATEGORIES
  { id: 43, label: "Narrative & Casual Games", color: "#edbcedff" },
  { id: 44, label: "Survival Games", color: "#edbcedff" },
  { id: 45, label: "Farming Games", color: "#edbcedff" },
  { id: 46, label: "Co-op Games", color: "#edbcedff" },
  { id: 47, label: "UNO", color: "#edbcedff" },
  { id: 48, label: "Speed", color: "#edbcedff" },
  { id: 49, label: "Spoons", color: "#edbcedff" },

  
  // STILL IMAGES
  { id: 50, label: "Social Media Images" , color: "#38a538ff"},
  { id: 51, label: "Photography", color: "#38a538ff" },

  // STILL IMAGES SUBCATEGORIES
  { id: 52, label: "Instagram", color: "#a0dda0ff"  },
  { id: 53, label: "Pinterest", color: "#a0dda0ff" },
  { id: 54, label: "Film Camera", color: "#a0dda0ff" },
  { id: 55, label: "Digital Camera", color: "#a0dda0ff" },

  // TEXT MEDIA
  { id: 60, label: "Online News & Articles", color: "#2a8dd8ff" },
  { id: 61, label: "Books & E-books", color: "#2a8dd8ff" },
  { id: 62, label: "Messaging & Email", color: "#2a8dd8ff" },

  // TEXT MEDIA SUBCATEGORIES
  { id: 63, label: "Fictional", color: "#8ec2e9ff" },
  { id: 64, label: "Non-Fictional", color: "#8ec2e9ff" },
  { id: 65, label: "Gmail", color: "#8ec2e9ff" },
  { id: 66, label: "iMessage", color: "#8ec2e9ff" },
  { id: 67, label: "WhatsApp", color: "#8ec2e9ff" }

]);

// ---------- EDGES ----------
const edges = new vis.DataSet([
  // CORE
  { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 },
  { from: 1, to: 5 }, { from: 1, to: 6 },

  // MOVING IMAGES
  { from: 2, to: 20 }, { from: 2, to: 21 }, { from: 2, to: 22 },
  { from: 20, to: 25 }, { from: 20, to: 26 }, { from: 21, to: 29 },
  { from: 21, to: 28 }, { from: 22, to: 24 },{ from: 22, to: 27 },

  // AUDIO
  { from: 3, to: 30 }, { from: 3, to: 31 }, { from: 3, to: 32 }, { from: 3, to: 33 },
  { from: 30, to: 36 }, { from: 30, to: 37 }, { from: 30, to: 38 }, { from: 30, to: 39 },
  { from: 31, to: 34 }, { from: 31, to: 35 },
  { from: 32, to: 34 },
  { from: 33, to: 38 }, { from: 33, to: 39 },


  // GAMES
  { from: 4, to: 40 }, { from: 4, to: 41 },
  { from: 40, to: 43 }, { from: 40, to: 44 }, { from: 40, to: 45 }, { from: 40, to: 46 },
  { from: 41, to: 47 }, { from: 41, to: 48 }, { from: 41, to: 49 },

  // STILL IMAGES
  { from: 5, to: 50 }, { from: 5, to: 51 },
  { from: 50, to: 52 }, { from: 50, to: 53 },
  { from: 51, to: 54 }, { from: 51, to: 55 },

  // TEXT
  { from: 6, to: 60 }, { from: 6, to: 61 }, { from: 6, to: 62 },
  { from: 61, to: 63 }, { from: 61, to: 64 },
  { from: 62, to: 65 }, { from: 62, to: 66 }, { from: 62, to: 67 },
]);

// ---------- OPTIONS ----------
const options = {
  physics: {
    solver: "forceAtlas2Based",
    stabilization: false
  },
  nodes: {
    shape: "dot",
    size: 18,
    font: { size: 14 }
  },
  interaction: {
    hover: true,
    zoomView: true
  }
};

// ---------- BUILD ----------
const container = document.getElementById("mindmap");
const data = { nodes, edges };
const network = new vis.Network(container, data, options);

// ---------- CLICK INTERACTION ----------
const info = document.getElementById("mindmap-info");

network.on("click", function (params) {
  if (params.nodes.length > 0) {
    const nodeId = params.nodes[0];
    const node = nodes.get(nodeId);
    info.innerText = node.label;
  }
});
