/**
 * ***************S - Declaration ******************************************************
 */
var webAPIPath;
webAPIPath = "http://localhost:5000/api/";
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
            confirmButtonText: "OK"
        });
    } else {
        var imagecode;
        var files = document.getElementById("image").files;
        var screenHeight = screen.height * 0.5;
        var screenWidth = screen.width * 0.75;
        let spanData = "<html><body  style='height:" + screenHeight + "!important'>" + detail + "</body></html>"
        if (files.length > 0) {
            var file = files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                imagecode = reader.result;
                Swal.fire({
                    // title: 'Settings',
                    html:
                        "<div class='previewColumnImage'><img src=" + imagecode + " display='inline-block'  width='100%' height= '95%'></div>" +
                        "<div class='previewColumnDescription'> "+spanData +"</div>",
                    showCancelButton: false,
                    showConfirmButton: false,
                    width: screenWidth,
                    overflow: "auto",
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

//const userAction = async (data) => {
//    const pathapi = webAPIPath + "socialMedia/InsertSocialMediaInfo";
//    const response = await fetch(pathapi, {
//        method: 'PUT',
//        body: data, // string or object
//        headers: {
//            'Content-Type': 'application/json'

//        }
//    });
//    const myJson = await response.json(); //extract JSON from the http response
//    Swal.fire({
//        title: "Success!",
//        // text: "Image is not selected",
//        icon: "success",
//        confirmButtonText: "OK"
//    });
//};

submitBtn.addEventListener("keypress", function () {
});


submitBtn.addEventListener("click", function () {
  let titleVal = title.value;
  let contactDetailsVal = contactDetails.value;
  let effectiveDateVal = effectiveDate.value;
  let expirationDateVal = expirationDate.value;
  let imageVal = image.value;

    if (!titleVal) {
        Swal.fire({
            title: "Error!",
            text: "Title is empty",
            icon: "error",
            confirmButtonText: "OK"
        });

        if (!contactDetailsVal) {
            Swal.fire({
                title: "Error!",
                text: "Contact Details is empty",
                icon: "error",
                confirmButtonText: "OK"
            });

            if (!effectiveDateVal) {
                Swal.fire({
                    title: "Error!",
                    text: "EffectiveDateVal is empty",
                    icon: "error",
                    confirmButtonText: "OK"
                });

                if (!expirationDateVal) {
                    Swal.fire({
                        title: "Error!",
                        text: "ExpirationDateVal is empty",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
    }

  if (titleVal && contactDetailsVal && effectiveDateVal && expirationDateVal) {
    if (!imageVal) {
      Swal.fire({
        title: "Error!",
        text: "Image is not selected",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
        let descriptionDetail = CKEDITOR.instances.editor.getData();

        var files2 = document.getElementById("image").files;
        if (files2.length > 0) {
            var file1 = files2[0];
            var reader1 = new FileReader();
            reader1.readAsDataURL(file1);
            reader1.onload = function () {
                var imagecodedata = reader1.result;
                var dataplayload = {
                    title: titleVal
                    , image: imagecodedata
                    , contactNumber: contactDetailsVal
                    , description: descriptionDetail
                    , effectiveDate: effectiveDateVal
                    , expirationDate:expirationDateVal
                    , createdUserId:"11252"
                };

                var options = {};
                options.url = webAPIPath + "socialMedia/InsertSocialMediaInfo";
                options.type = "POST";
                //options.contentType = "application/json";
                options.data = dataplayload;
                options.dataType = "json";
                options.xhrFields = {
                    withCredentials: true
                };
                options.success = function (data) {
                    Swal.fire({
                        title: "sucess!",
                        text: "suceess",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                   
                };
                options.error = function (xhr, textStatus, error) {
                  Swal.fire({
                        title: "Error!",
                        text: error,
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                };
                $.ajax(options);

            };
        };
    };
  }
});

/**
 * *****************E - Submit button function ********************************************
 */
