/**
 * ***************S - Declaration ******************************************************
 */

const imageUploadBtn = document.getElementById("imagebutton");
const fileInput = document.querySelector("input[type=file]");
const filenameContainer = document.querySelector("#filename");
const submitBtn = document.getElementById("submit");
const title = document.getElementById("title");
const contactDetails = document.getElementById("contactDetails");
const effectiveDate = document.getElementById("effectiveDate");
const expirationDate = document.getElementById("expirationDate");
const image = document.getElementById("image");
const preview = document.getElementById("preview");

/**
 * ****************E - Declaration ******************************************************
 */

/**
 * ****************S - call CK Editor ***************************************************
 */

initSample();

/**
 * ***************E - call CK Editor ****************************************************
 */

/**
 * **************S - Image Upload function *********************************************
 */

imageUploadBtn.addEventListener("click", () => {
  document.getElementById("image").click();
});

fileInput.addEventListener("change", function () {
  filenameContainer.innerText = fileInput.value.split("\\").pop();
});

/**
 * ****************E - Image Upload function *********************************************
 */

/**
 * ***************S - Preview Function **************************************************
 */

preview.addEventListener("click", () => {
  var imageVal = image.value;
  let detail = CKEDITOR.instances.editor.getData();
  console.log(detail);

  if (!imageVal) {
    Swal.fire({
      title: "Error!",
      text: "Image is not selected",
      icon: "error",
      confirmButtonText: "OK",
      showCloseButton:true,
    });
  } else {
    var imagecode;
    var imgdev
    var files = document.getElementById("image").files;
    var screenHeight = screen.height * 0.5;
    var screenWidth = screen.width * 0.5;
    let spanData = "<html><body  style='height:"+screenHeight+  "!important'>"+detail+"</body></html>" 
    if (files.length > 0) {
      var file = files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        imagecode = reader.result;
         imgdev = document.createElement('img');
        imgdev.src = imagecode;
        Swal.fire({
          // title: 'Settings',
          html:
            "<div class='previewColumn'><img src="+imagecode+" display='inline-block' width='100%' height="+ screenHeight+ "></div>"+
            "<div class='previewColumn'><span style ='width:100%;max-height:"+ screenHeight+ ";overflow:auto;'>"+spanData+"</span></div>",
          showCancelButton: false,
          showConfirmButton: false,
          width: screenWidth,
          overflow:"auto",
          customClass: 'swal-height',

        });
      };
    }


  }
});
/**
 * ****************E - Preview Function **************************************************
 */

/**
 * ***************S - Submit button function *********************************************
 */

submitBtn.addEventListener("click", function () {
  let titleVal = title.value;
  let contactDetailsVal = contactDetails.value;
  let effectiveDateVal = effectiveDate.value;
  let expirationDateVal = expirationDate.value;
  let imageVal = image.value;

  if (titleVal && contactDetailsVal && effectiveDateVal && expirationDateVal) {
    if (!imageVal) {
      Swal.fire({
        title: "Error!",
        text: "Image is not selected",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      let descriptionVal = CKEDITOR.instances.editor.getData();
    }
  }
});

/**
 * *****************E - Submit button function ********************************************
 */
