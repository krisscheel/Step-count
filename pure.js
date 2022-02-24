// alert("hello Kristen")

// lets change the text that is hardcoded as hello Kristen, into hello [someone]
// pick the h1 tag

const headerTag = document.querySelector("h1");

// change the html content
// headerTag.innerHTML = "hello someone"

// then change the HTML tag to a background of red
// headerTag.style.backgroundColor = "var(--primary-orange)"

// font size bigger
// headerTag.style.fontSize = "64px"

// lets pick all fo the h1 tags on the page
// then for each tag, let it have a background-color
const headerTags = document.querySelectorAll("h1");

// unfortunately, we. can't do headerTags.innerHTML = "whatever", because this is a list of multiple tags
// instead, we will do a forEach loop
// headerTags.forEach(h1 => {
//   const hue = 360 * Math.random()
//   h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)"
// })

// pick each tag and label it with each tags number, the index
headerTags.forEach((h1, index) => {
  h1.innerHTML = "this is tag number " + index;
});

//lets select ALL of the rectangle tags
//then lets change the width of the rectangles
//const rectTags = document.querySelectorAll("rect")

//data[0]...550
//data[1]...420
//data[2]...731

// rectTags.forEach((tag, i) => {
//   //tag.style.fill = "red"
//   const width = data[i]
//   tag.setAttribute("width", width + "px")
// })
const data = [
  2, 3, 5, 6, 4, 2, 5, 20, 24, 32, 40, 59, 68, 89, 100, 112, 109, 101, 78, 56,
  32, 31, 12, 1,
];
const todaySvg = document.querySelector("svg");

//width bar = 24
//gap between bars = 12
//max height = 112

data.forEach((d, i) => {
  //add a rectangle tag to todaySvg
  const rectTag = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectTag.setAttribute("x", i * 36);
  rectTag.setAttribute("y", 112 - d);
  rectTag.setAttribute("width", 24);
  rectTag.setAttribute("height", d);

  todaySvg.append(rectTag);
});
