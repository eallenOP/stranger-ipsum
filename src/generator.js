// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'Move to a connected, national network – away from a competitive system that separates work-based learning, campus learning and online learning.',
      'We’ve been given a once in a lifetime opportunity to reimagine and build a world-class vocational, and on-the-job learning system for Aotearoa New Zealand that has our learners at the centre.',
      'How successful we are will be measured by how well we meet the expectations of our Charter.',
      'Focus on efficient and cost-effective delivery across the network.',
      'We have listened to the needs of learners, staff, and employers and through them developed a set of ideas for potential services that could remove barriers to learning and connecting with employers.',
      'Partner with employers to deliver relevant work-integrated education that meets skills needs.',
      'Te Tiriti o Waitangi relationships are fundamental to the way we will work together to achieve equity.',
      'Learners receive more immediate, proactive and specific holistic wellbeing services that starts as soon as they apply to train.',
      'We will take what we’ve learnt and achieved together to enhance the best parts of the network and improve upon those parts that aren’t as well supported or won’t get us to the outcomes we need.',
      'As we develop as a network, we will customise solutions that fit with individual business needs.',
      'With renewed emphasis, we will support our people to enhance their cultural and teaching and learning capability and, as a workplace, Te Pūkenga will be inclusive, culturally diverse and culturally aware. ',
      'Systems, processes and practices will be integrated over time.',
      'Collectively, we will measure our performance around learners and whānau, with a focus on learner success.',
      'Opportunities will develop to make decisions in Mātauranga Māori and Taonga Māori protection, benefit and use activity.',
      'Strategic functions interact with and support other parts of the network and system to form strategic insights and embed the network’s strategic direction.',
      'Strategic functions identify opportunities for innovation, measures the impacts of initiatives and interventions, and the network’s performance.',
      'Enabling functions sustain the other functions and the information flows between them to enable quality, certainty, and consistency across the network.',
      'Bringing together these core enabling functions also drives efficiencies and reduces duplication within the network.',
      'By working together in new ways, we will empower staff to drive excellence in moderation, and quality assurance, undertaking formal capability development together, and enhancing and maintaining curriculum and resources.',
      'Just as importantly though, the model describes how we will also deliver impact meaningful regional impact that is unique to our communities.',
      'The approach will allow time for any capability uplift and reflects our priority to transition and transform educational services in a smooth and efficient manner.',
      'Bring our people together across the country to integrate teaching and learning within the workplace and other settings.',
      'To share knowledge and increase depth of capability across disciplines and specialist support areas.',
      'Give effect to Te Tiriti o Waitangi at all levels; improve Māori-Crown education and employment partnerships; and prioritise Māori economy and business needs.',
      'Commit to creating impactful change by partnering to enhance societal outcomes regionally and nationally.',
      'Enable new and strengthened functions that drive strong collaboration across the network.',
      'Uplift our cultural and teaching and learning capability.',
      'Provide clear strategy and direction and be responsive to the needs of our staff, our different communities, regions, and learners.',
      'Engagement on governance structure and regional boundaries.',
      'We’re encouraging you to share your voice and influence the development of the Operating Model to its final stage.',
      'It provides an overview of how Te Pūkenga network is creating a world-class vocational and applied learning system that is accessible for all learners in Aotearoa New Zealand, and the mahi that’s been done to get us to this point.',
      'The model does not confirm our new organisational design and structure, how we govern ourselves or what our regions are.',
      'Our Operating Model puts learners and their whānau at the centre (te rito).',
      'However, the change that is needed can only occur in partnership with our staff, employers, and Te Tiriti o Waitangi partners (te awhi rito) who must support our learners.',
      'In particular there is a focus on the voices of Māori, Pacific and disabled communities.',
      'Over the coming years we will continue to increase learning and proactive personalised holistic support services that are whānau-centred.',
      'Transitions from secondary to tertiary and into the workforce will be seamless and supported.',
      'Innovative and accessible digital platforms will be available and all staff will be culturally skilled and disability confident.',
      'Learning spaces will be adapted and designed to be accessible, welcoming and reflect our cultural diversity.',
      'We will leverage naturally occurring evidence of learning in everyday work and draw on digital and work-integrated approaches that together support the acquisition of knowledge and practical skills in new and different ways,',
      'A broad range of learning/teaching tools are available including Virtual Reality and Artificial Intelligence.',
      'With renewed emphasis, we will support our people to enhance their cultural and teaching and learning capability and, as a workplace, Te Pūkenga will be inclusive, culturally diverse and culturally aware.',
      'Systems, processes and practices will be integrated over time.',
      'The national staff advisory committee will be chosen by staff for staff.',
      'Leadership and capability building programmes support our people with the right skills and attributes required for the future.',
      'Collectively, we will measure our performance around learners and whānau, with a focus on learner success.',
      'As the partnerships gain strength Te Pūkenga will partner to customise solutions and co-create a process for determining shared priorities and gaining assurance on implementation.'
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
	return randomSentence;
};

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = '';
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(' ' + this.getRandomSentence());
    }
  }
  return paragraph;
};

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = '';
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += '<p>' + paragraph + '</p>';
  });
  return paragraphHTML;
};
