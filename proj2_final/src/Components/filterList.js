import React from 'react';

function renderList(results) {
  var cardBody = document.querySelector('#card-result');
  // clear out inner HTML to get rid of any older results
  cardBody.innerHTML = '';
  // Map each database record to a string containing the HTML for it's row
  console.log(results)
  var cards = [];
  results.forEach(test => {
    if (test.sizes.length == 0) {
      cards.push('<div class="card" style="width: 18rem;"> <img src="' + test.image + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + test.style + '</h5><p class="card-text">$' + test.price + ' USD</p><a href="#" class="btn btn-danger">Sold out</a></div></div>')
    }
    else {
      cards.push('<div class="card" style="width: 18rem;"> <img src="' + test.image + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + test.style + '</h5><p class="card-text">$' + test.price + ' USD</p><a href="#" class="btn btn-primary">Purchase</a></div></div>')
    }

  })

  // Set the contents of the table body to the new set of rendered HTML rows
  cards.forEach(function (card) {
    // cardBody.innerHTML += card; // += adds to HTML instead of overwriting it entirely.
    cardBody.innerHTML += card;
  });

  // Lower level scope once again overwrites what's above it.
  var foo = 'renderList';
  console.log(foo); // 'renderList'
}
renderList(mockDatabase);

function orderBy(sortValue) {
  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      //Code Written By Steven Katz from Project 1
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
      //Used to filter
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


  if (sortValue === 'style') {

    console.log(mockDatabase.sort(compareValues('style', 'asc')));
  }
  else if (sortValue === 'price') {
    console.log(mockDatabase.sort(compareValues('price', 'asc')));
  }

  renderList(mockDatabase);
}

document.querySelector('#orderBy').addEventListener('change', function (event) {
  // Event is the JavaScript event that transpired, in our change a CHANGE event.
  // Target is the element it was performed on, useful for when the event targets 
  // multiple elements.
  // Value has the name implies is the current value of the input element, if there is one
  orderBy(event.target.value);
});

function togglePublished(showAvailable) {
  // If showPublished is TRUE, only display published results
  // Filter will only inclue objects that return TRUE from it's query
  if (showAvailable) {
    var filteredResults = mockDatabase.filter(function (result) {
      // If showPublished is TRUE, always show.
      // Otherweise only show if published is TRUE
      return result.sizes.length != 0;
    });
    renderList(filteredResults);
  }
  else
    renderList(mockDatabase)

}
// Change events trigger after the value of a form input changes

export default filterList;

