// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-cook").on("click", function(event) {
      console.log("change-cook")
      var id = $(this).data("id");
      var newCook = $(this).data("newcook");
  
      var newCookState = {
        cook: newCook
      };

  console.log("New cook state", newCookState)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newCookState
      
      }).then(
        function() {
          console.log("changed cook to", newCook);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      console.log("burger created")
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        cook: $("[name=cook]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      console.log("delete-burger clicked")
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  