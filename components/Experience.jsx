import React from "react";

function Experience() {
  return (
    <div id="experience" className="scroll-mt-12">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl tracking-wider uppercase text-color-accent font-bold">
          Technologies
        </h2>
        <p className="pb-5">These are the technologies I've worked with</p>

        {/* <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 py-4 lg:gap-8 shadow-md shadow-slate-500 text-center"> */}
        <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/* start icon technology */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <div className="dark:fill-slate-50 w-32 h-32 m-auto">
              <svg viewBox="0 0 128 128">
                <path d="M18.767 82.685c-2.043-1.606-4.224-3.146-5.713-5.317-3.135-3.828-5.548-8.258-7.198-12.914-.998-3.028-1.339-6.275-2.625-9.185-1.344-2.114.231-4.425 2.547-5.097 1.03-.198 2.843-1.171.655-.476-1.962 1.44-2.151-1.306-.139-1.481 1.372-.181 1.878-1.305 1.408-2.316-1.474-.962 3.574-2.017 1.034-3.452-2.645-2.855 3.7-3.404 2.135-.162-.375 2.492 4.435-.458 3.318 2.421 1.135 1.383 4.248.315 4.17 2.254 1.652.114 2.22 1.503 3.77 1.61 1.608.727 4.521 1.298 5.068 3.11-1.594 1.261-5.286-2.608-5.464.886.482 5.163.358 10.48 2.248 15.396.893 2.978 3.059 5.32 5.015 7.64 1.872 2.271 4.407 3.869 6.991 5.214 2.266 1.069 4.709 1.777 7.18 2.223 1.001-.766 2.771-3.614 4.333-2.413.075 1.35-3.101 2.822-.149 2.674 1.734-.525 2.936 1.34 4.364-.343 1.315 1.558 5.467-.994 4.531 2.19-1.267.816-3.112.321-4.379 1.447-2.09-1.045-3.753.933-6.068.685-2.569.458-5.184.645-7.789.648-4.274-.337-8.638-.48-12.703-1.967-2.293-.666-4.527-1.972-6.54-3.275zm3.608 1.565c2.236.966 4.423 1.985 6.874 2.293 3.889.54 7.905 1.373 11.808.615-1.767-.798-3.593.308-5.353-.571-2.11.455-4.375-.115-6.521-.396-2.439-1.086-5.072-1.834-7.357-3.245-2.855-1.043 1.476 1.338 2.248 1.531 1.784 1.013-1.962-.52-2.491-.94-1.495-.839-1.686-.664-.148.188.31.179.616.371.94.525zm-4.256-3.008c2.168.804-.009-1.524-1.001-1.389-.44-.764-1.682-1.246-.806-1.655-1.574.547-1.65-2.079-2.389-1.704-1.667-.526-.648-2.39-2.634-3.534-.181-1.206-1.971-2.251-2.542-4.07-.252-.932-2.024-3.605-.936-1.118.926 2.396 2.555 4.449 3.913 6.498 1.052 1.95 2.296 3.991 4.213 5.208.646.62 1.27 1.57 2.182 1.764zm-6.242-6.855c.074-.327.396.708 0 0zm8.839 7.818c.479-.217-.691-.272 0 0zm1.176.428c-.121-.593-.538.332 0 0zm1.473.613c.7-.667-1.081-.421 0 0zm2.524 1.407c.426-.628-1.364-.236 0 0zm-4.847-3.378c1.088-.705-1.407-.009 0 0zm1.104.551c-.031-.372-.393.166 0 0zm5.521 3.446c.888.561 5.184 1.227 2.494.229-.451.096-4.988-1.282-2.494-.229zm-8.763-6.827c-.087-.372-1.38-.412 0 0zm2.568 1.499c.67-.466-1.388-.36 0 0zm2.163 1.326c.96-.363-1.557-.364 0 0zm-5.779-3.964c1.042.8 4.202.104 1.595-.476-1.186-.632-3.858-1.064-2.036.381l.441.095zm7.243 4.421c.435-.739-1.82-.422 0 0zm-2.201-1.749c2.546.721-2.141-1.611-.628-.265l.335.151.293.114zm4.414 2.55c2.411.024-2.179-.332 0 0zm-10.384-6.617c-.094-.449-.594.037 0 0zm14.462 8.906c.064-.81-.786.604 0 0zm-10.345-6.385c-.147-.428-.754-.019 0 0zm-3.887-2.802c1.384-.085-1.897-.609 0 0zm-4.606-2.977c-.173-.665-1.506-1.193 0 0zm12.09 7.673c-.253-.29-.12.063 0 0zm7.524 4.617c-.023-.442-.41.167 0 0zm-8.19-5.305c.136-.571-1.181-.174 0 0zm-5.606-3.553c1.03-.11-1.651-.697 0 0zm9.483 5.891c1.605-.635-1.565-.309 0 0zm-4.933-3.347c1.85.238-2.201-1.259-.407-.135l.407.135zm6.43 3.954c1.728-1.032 1.158 2.418 2.931.291 1.748-1.277-1.51 1.578.644.228 1.559-1.042 3.861.494 5.315.995 1.045-.051 2.062.904 3.135.322 2.064-.556-4.037-.824-2.438-1.809-1.888.549-3.282-.655-4.212-1.865-2.119-.489-4.566-1.573-5.625-3.448-.432-.703.622.101-.373-1.05-1.276-1.136-1.913-2.426-2.77-3.805-1.023-.545-1.144-2.152-1.247-.054.008-1.324-1.236-2.216-1.541-1.847-.005-1.276 1.333-.636.396-1.58-.201-1.323-.865-2.7-1.064-4.193-.309-.721-.043-2.262-1.058-.633-.369 1.722-.122-2.115.453-.851.753-1.292-.271-1.139-.313-.961.491-1.089.311-2.634-.129-2.045.261-1.155.413-4.251-.391-3.701.488-1.208.926-5.528-1.193-3.881-.858.013-2.345.31-3.046.66 2.201 1.214-.222.439-1.12.245-.116 1.125-1.004.64-2.114.65 1.772.218-.863 1.813-1.878 1.193-1.321.63 1.139 2.207.026 2.694.137.733-2.023-.266-1.854 1.43-1.282-.541-.175 2.012.466 1.148 2.18.591 1.534 1.935 1.589 3.212-.355.745-1.754-1.75-.312-1.634-1.138-1.849-1.258-.668-2.205.191-.219.061 2.412 1.222.761 1.795 1.452.225 1.495 1.495 1.792 2.3.872.91.693-1.004 1.738.09-.662-.976-3.503-2.746-1.216-2.178-.012-.98-.414-1.771.288-1.752.695-1.256-.728 3.1.837 1.503.434-.19.541-1.258 1.32.101 1.13 1.113.409 1.919-1.187.897.285.971 2.134 1.315 1.786 2.829.368 1.333.884.842 1.333.765.352 1.294.553.343.569-.272 1.612.345 1.234 1.298 1.74 1.965 1.112.5-1.591-3.4.317-1.173 2.007 1.812.753 2.567-1.048 2.278 1.14-.093 1.507 1.541 2.934 1.484 1.301.618 2.182 2.994-.061 2.005-.777-.702-3.53-1.566-1.28-.232 2.075.961 3.724 1.535 5.726 2.743 1.432 1.021 2.051 2.192 2.594 2.427-1.204.572-3.628-.461-1.828-.777-1.124-.203-2.387-.773-1.312.627.916.764 3.241.685 3.659.77-.354.777-.96.84.013.9-1.083.581.353.672.453 1.003zm-2.223-6.277c-.662-.692-.834-1.986-.118-.861.367.148 1.175 2.116.118.861zm7.239 4.597c.413-.027.013.314 0 0zm-8.283-6.295c-.026-1.045.239.807 0 0zm-.719-.966c-.833-1.607 1.049.454 0 0zm-8.72-6.018c.489-.131.241.834 0 0zm6.94 3.76c.3-1.127.353.945 0 0zm-4.903-3.409c-.345-.621.723.584 0 0zm4.207 1.349c-.788-1.766.56-.965.175.289l-.175-.289zm-7.256-4.839c-.352-.579-.935-2.278-.746-2.798.168.846 1.796 3.637.797 1.156-1.103-2.079 1.319.673 1.568 1.194.117.516-.681-.141-.141 1.069-.984-1.377-.58.761-1.478-.621zm-2.241-1.546c.092-1.347.512.923 0 0zm1.008.349c.481-1.017.815 1.417 0 0zm-2.427-1.878c-.834-.831-1.438-1.594.041-.514.568.021-1.267-1.741.136-.561 1.475.27.728 2.419-.177 1.075zm1.275-.033c.485-.481.257.473 0 0zm.785.251c-.736-1.377.892.579 0 0zm-1.559-1.489c-2.426-2.161 3.049 1.128.396.4l-.396-.4zm6.954 4.039c-1.051-.629-.28-4.432.08-1.832 1.02-.33-.057 1.344.704 1.328-.12 1.057-.461 1.435-.784.504zm2.572 1.522c.103-1.147.216.782 0 0zm-.447-.444c.115-.487.011.578 0 0zm-8.604-5.827c-1.56-2.15 4.531 2.177.999.546-.369-.097-.814-.133-.999-.546zm4.954 2.625c-.148-1.811.328.3 0 0zm3.759 2.413c.291-1.031.023.682 0 0zm-8.473-5.859c.927-.198 3.839 1.626 1.165.521-.297-.329-.932-.18-1.165-.521zm7.957 3.966c.099-1.853.554-1.105.004.265l-.004-.265zm-7.268-4.611c.377-.554-1.003-2.503.199-.698.519.412 1.502.69.634.863 1.366 1.206-.332.326-.833-.165zm6.874 4.033c.261-2.11.231 1.235 0 0zm-7.664-5.982c.29-.123.154.385 0 0zm1.795 1.067c.461-.969.85 1.08 0 0zm5.056 2.814c-.003-.373.097.541 0 0zm-.292-.649c-.701-1.731.653.917 0 0zm-.431-1.136c-.117-.714.401.899 0 0zm.703-1.14c-.483-.849.607-3.74.73-1.946-.509 1.396-.146 2.179.207.305.655-1.476-.142 2.91-.937 1.641zm.72-4.301c.21-.257.047.311 0 0zm-1.204 23.725c-.286-.25.036.157 0 0zm2.48 1.253c1.38.354 1.373-.215.126-.384-.67-.624-2.787-1.286-.892-.078.124.319.52.311.766.462zm-4.897-3.253c.759.568 2.862 1.605 1.083.216.6-.696-1.148-1.068-.569-1.535-1.476-.902-1.165-.821-.13-.793-1.773-.794.256-.733.161-1.141-.684-.135-3.397-1.206-1.801.088-1.622-.826-.387.308-.877.188-1.66-.451 1.477 1.264-.263.838.951.753 2.561 1.933.401.797-.284.41 1.545 1.03 1.995 1.342zm2.593 1.49c3.153 1.014-1.547-1.242 0 0zm13.278 8.045c.041-.626-.43.533 0 0zm1.365.573c.728-.703.03 1.124 1.205-.172.013-.928-.035-1.477-1.35-.35-.364.203-.525 1.055.145.522zM12.589 70.896c-.223-.876-1.567-.874 0 0zm1.456.956c-.541-.897-1.93-.813 0 0zm8.292 5c.81.72 3.718.528.983.089-.404-.599-2.571-.457-.983-.089zm11.396 7.039c1.246-1.046-1.207.465 0 0zm2.592 1.78c.008-.336-.537.146 0 0zm.004-.47c1.379-1.462-1.336.086 0 0zM9.004 67.896c-1.176-1.677-.731-2.431-1.864-3.801-.216-1.048-1.946-3.425-.895-.907.962 1.473 1.247 3.753 2.759 4.708zm26.892 16.841c2.539-1.64-1.042-.716 0 0zm1.937.758c1.272-1.092-.804-.227 0 0zM12.158 69.042c.363-.54-.94-.07 0 0zm25.271 15.935c1.231-.792-.284-.671-.223.072l.223-.072zM20.728 74.451c-.042-.536-.65.045 0 0zm1.032.593c-.329-.663-.504.105 0 0zm17.643 10.469c1.577-1.138-.955-.217-.33.216l.33-.216zm-.604-.291c1.285-1.077-1.355.476 0 0zm3.086 2.054c.863-.578-1.049-.187 0 0zM12.948 68.652c1.155.259 4.619 2.847 2.576.18-1.047-.31-.419-2.868-1.487-2.416.717 1.198.589 1.706-.915.952-1.89-.924-1.063.457-.692.837-.504.114.666.439.518.447zm-5.265-4.158c.207-.857-1.906-4.708-.998-1.931.327.582.294 1.684.998 1.931zm9.665 5.959c-.597-.498-.029-.072 0 0zm1.465.341c0-.906-1.62-.369 0 0zM31.515 78.8c-.243-.618-.957-.014 0 0zm.61.445c-.091-.347-.352.068 0 0zm5.034 3.172c.484-.356-.604-.046 0 0zM10.312 65.165c1.385-.536-1.485-.382 0 0zm20.084 12.652c-.015-.895-.883.224 0 0zM9.765 63.89c.889-.301-.824-.198 0 0zm2.581 1.25c-.014-.294-.272.113 0 0zm31.496 19.313c1.144-.229 3.751.582 4.172-.303-1.39-.034-4.806-.979-4.967.225l.304.048.491.03zM13.167 65.348c.021-.91-.708-.035 0 0zm-6.788-4.71c-.308-1.731-1.173-.263 0 0zm1.618.406c.021-.556-1.481-.5 0 0zm.926.455c-.268-.216-.209.273 0 0zm5.821 3.734c.275-.253-.649-.186 0 0zm-6.436-4.759c-.158-1.307-1.877-.195 0 0zm-3.322-2.153c-.046-.604-.322.227 0 0zm.495-.373c-.08-.717-.424.09 0 0zm2.727 1.627c1.154-.452-2.1-.937-.236-.085l.236.085zm36.509 22.552c.739-.677-.937-.209 0 0zm4.411 2.285c.296-.872-.746.116 0 0zM8.488 58.147c.121-.848-.916.167 0 0zm-3.882-2.601c-.208-1.195-.179-3.292 1.814-2.584-2.661.529 1.843 3.309 1.275 1.113 1.119.056 2.188-.661 1.602.425 2.205-.242 3.733-2.155 5.864-1.887 1.659-.22 3.474-.387 5.261-1.055 1.471-.105 2.887-1.688 2.081-2.626-2.005-.17-4.104.082-6.32.522-2.455.51-4.686 1.479-7.164 1.896-2.416.325.485.895-.208 1.021-1.259.438 1.504.732-.163 1.193-1.029-.196-2.101-.549-1.661-1.634-2.313.301-4.347 1.26-2.519 3.614l.138.002zm5.576-2.839c.542-1.998 2.905 1.644.888.265-.24-.181-.637-.328-.888-.265zm.105-.97c.783-.582.415.328 0 0zm.993.017c.072-.919 2.277.487.364.331l-.364-.331zm1.36-.546c.497-.582.144.514 0 0zm.348-.233c.827-.994 4.681-.636 1.86-.098-.756-.569-1.335.336-1.86.098zm5.032-.776c-.125-2.715 2.5.963 0 0zm1.428-.01c.521-1.365 2.026-.548.242-.274.038.147-.053.708-.242.274zM7.925 57.445c1.559-.955-1.655-.83 0 0zm1.153.319c.547-.581-1.189-.235 0 0zm-3.398-2.41c.891-.686-1.055-.261 0 0zm46.051 28.809c.027-.795-.681.357 0 0zm-4.679-3.193c.134-.914-.602.079 0 0zm5.966 3.501c1.246.006 3.775-.387 1.064-.386-.426.065-2.478.053-1.064.386zM10.092 57.204c1.009-.068 1.578-1.112-.196-1.053-2.747-.282 2.424.942-.353.592-.371.246.528.529.549.461zm.888.449c-.105-.646-.312.344 0 0zm1.054-2.809c.437-.542-.606-.145 0 0zM8.68 49.239c1.8-.611 4.262-1.3 5.111.301-.865-1.04-.35-2.065.468-.543 1.155 1.539 1.732-.7.982-1.217.856 1.063 1.829 1.567.573.067 1.366-1.642-2.734.216-3.665.197-.449.2-4.629 1.065-3.469 1.195zm1.055-2.02c1.025-.775 3.55.461 1.93-.771-.159-.139-3.545.935-1.93.771zm3.743.155c1.2.03-.519-1.615.912-.87-.234-.767-1.666-.91-2.366-1.218-.397.703.805 2.097 1.454 2.088zm-3.087-3.397c.416-.564-.728.286 0 0zm1.53.365c1.936-.256-.494-.833-.391-.02l.391.02zm-2.856-2.233c-1.364-1.781 2.564.299 1.178-1.565-1.166-.928-2.285 1.047-1.178 1.565zm17.491 9.421c.625-1.108-2.58-1.494-.42-.392.197.065.153.467.42.392zm0 0" />
                <path d="M56.063 43.886c-.223.883-.362 2.362-.414 4.44 0 .409-.184.613-.553.613-.368 0-.625-.178-.769-.533-.395-.961-.77-1.63-1.125-2.013-.42-.447-.98-.717-1.677-.809-.75-.118-2.617-.178-5.604-.178-.683 0-1.132.073-1.341.217-.132.092-.197.29-.197.594v8.938c0 .304.19.447.571.435 1.171-.014 2.868-.094 5.09-.238.434-.052.727-.195.878-.424.152-.229.3-.825.444-1.786.092-.526.401-.73.927-.611.448.092.64.296.573.611-.369 1.79-.488 4.118-.356 6.986.014.342-.203.526-.65.552-.369.04-.599-.158-.691-.592-.341-1.644-.977-2.521-1.903-2.635-.928-.11-2.437-.166-4.528-.166-.237 0-.354.083-.354.255v8.882c0 .656.242 1.104.729 1.341.383.196 1.204.374 2.467.532.646.064.927.35.849.848-.08.435-.658.605-1.737.513-3.118-.249-5.689-.235-7.714.041-.566.077-.848-.151-.848-.69 0-.342.282-.539.848-.592 1.289-.146 1.933-1.277 1.933-3.395V48.127c0-.866-.154-1.534-.463-2-.31-.468-.885-.894-1.727-1.274-.526-.237-.722-.56-.591-.968.065-.25.171-.388.315-.414.131-.04.481-.013 1.045.079.829.132 2.783.198 5.86.198 3.632 0 6.768-.08 9.413-.237.881-.053 1.322.019 1.322.216a.693.693 0 01-.022.159zm0 0M68.889 68.967c0 .525-.297.757-.889.688-1.813-.169-4.064-.145-6.747.079-.54.054-.871.039-.998-.038-.125-.079-.187-.296-.187-.653 0-.314.358-.58 1.075-.797.718-.217 1.076-.866 1.076-1.944V48.445c0-1.067-.155-1.849-.463-2.349-.31-.5-.852-.888-1.628-1.163-.408-.145-.612-.349-.612-.613 0-.394.296-.69.887-.887.896-.29 1.823-.735 2.784-1.342.789-.474 1.289-.708 1.499-.708.487 0 .73.334.73 1.006 0-.053-.027.605-.079 1.972-.038 1.302-.052 2.584-.038 3.848l.077 17.619c0 .804.198 1.387.593 1.748.395.362 1.072.602 2.031.72.592.063.889.288.889.671zm0 0M86.883 67.643c0 .278-.503.695-1.508 1.253-1.007.56-1.813.839-2.418.839-.514 0-.966-.248-1.361-.75-.395-.499-.671-.749-.83-.749-.117 0-.741.271-1.873.808-1.13.541-2.27.812-3.413.812-1.078 0-1.98-.317-2.704-.947-.788-.697-1.184-1.646-1.184-2.843 0-2.275 2.604-3.906 7.814-4.893.894-.171 1.348-.533 1.359-1.086l.042-1.263c.077-2.157-.876-3.235-2.862-3.235-.565 0-1.103.504-1.609 1.518-.505 1.013-1.232 1.559-2.179 1.639-1.078.104-1.619-.35-1.619-1.362 0-.632.804-1.368 2.408-2.211 1.683-.88 3.303-1.321 4.854-1.321 2.67 0 3.993 1.27 3.966 3.809l-.08 8.128c-.011.855.351 1.283 1.087 1.283.145 0 .421-.033.828-.099a8.25 8.25 0 01.711-.099c.381 0 .571.258.571.769zm-6.075-4.498c.012-.329-.064-.547-.229-.651-.163-.105-.423-.125-.778-.06-3.171.566-4.755 1.599-4.755 3.097 0 1.513.822 2.27 2.466 2.27.658 0 1.336-.124 2.032-.373.816-.291 1.223-.64 1.223-1.047l.041-3.236zm0 0M101.604 65.294c0 1.396-.537 2.504-1.608 3.326-1.071.823-2.535 1.234-4.392 1.234-1.234 0-2.473-.131-3.709-.396-1.065-.237-1.684-.453-1.854-.65-.106-.186-.158-1.085-.158-2.703 0-.699.158-1.06.476-1.086.313-.04.583.131.808.512.986 1.724 2.578 2.587 4.774 2.587 1.854 0 2.781-.646 2.781-1.935 0-.564-.208-1.039-.631-1.42-.461-.435-1.354-.942-2.683-1.52-1.921-.855-3.204-1.605-3.848-2.25-.697-.684-1.047-1.604-1.047-2.763 0-1.42.546-2.525 1.639-3.314 1.014-.762 2.367-1.144 4.063-1.144 1.066 0 2.04.085 2.921.256.948.172 1.441.382 1.481.632.104.736.322 1.802.649 3.198.041.17-.145.308-.552.413-.435.092-.723.019-.867-.216-1.041-1.698-2.354-2.547-3.947-2.547-1.802 0-2.704.579-2.704 1.737 0 .646.245 1.157.73 1.538.435.329 1.454.842 3.059 1.54 1.684.723 2.828 1.375 3.433 1.953.793.75 1.186 1.757 1.186 3.018zm0 0M124.493 68.847c0 .461-.31.705-.928.73-.922.014-2.125.078-3.611.196-.736.146-1.263.055-1.579-.274-2.078-2.237-3.841-4.578-5.288-7.025-.117-.21-.27-.315-.453-.315-.225 0-.612.198-1.163.592-.62.341-.929.828-.929 1.458 0 .449.013 1.093.039 1.936.026.841.236 1.394.632 1.656.276.186.914.33 1.913.435.618.079.928.31.928.69 0 .304-.05.491-.147.563-.098.073-.359.089-.78.049-1.315-.117-3.537-.051-6.67.197-.788.065-1.216-.032-1.28-.296a1.47 1.47 0 01-.041-.396c0-.406.401-.716 1.204-.925.725-.186 1.085-1.033 1.085-2.546V48.326c0-1.078-.104-1.828-.314-2.248-.289-.541-.896-.962-1.816-1.265-.434-.144-.65-.347-.65-.611 0-.382.31-.678.927-.887a12.36 12.36 0 002.82-1.362c.725-.474 1.172-.711 1.343-.711.539 0 .81.342.81 1.027 0-.093-.006.559-.021 1.952-.013.961-.02 2.25-.02 3.869l.04 12.35c0 .344.093.514.275.514.196 0 .5-.17.908-.514a103.59 103.59 0 004.024-3.354c.317-.329.474-.591.474-.789 0-.355-.532-.605-1.597-.75-.46-.054-.68-.31-.653-.771.041-.459.271-.657.692-.591.947.132 2.329.204 4.143.217 1.264.012 2.52.02 3.77.02.407.014.611.256.611.73 0 .447-.322.69-.966.73a7.255 7.255 0 00-2.861.69c-1.251.566-2.586 1.559-4.007 2.979a.358.358 0 00-.157.295c0 .185.223.625.671 1.323 1.645 2.5 3.197 4.387 4.656 5.663.935.802 1.809 1.203 2.625 1.203.604 0 .98.043 1.124.129.144.088.217.315.217.683zm0 0" />
              </svg>
            </div>

            <div className="dark:fill-slate-50 w-24 h-24 m-auto">
              <svg viewBox="0 0 128 128">
                <path
                  className="fill-[#83CD29] dark:fill-slate-50"
                  d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"
                ></path>
                <path
                  className="fill-[#404137] dark:fill-slate-50"
                  d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"
                ></path>
                <path
                  className="fill-[#83CD29] dark:fill-slate-50"
                  d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"
                ></path>
                <path
                  className="fill-[#404137] dark:fill-slate-50"
                  d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"
                ></path>
                <path
                  className="fill-[#83CD29] dark:fill-slate-50"
                  d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"
                ></path>
                <path
                  className="fill-[#404137] dark:fill-slate-50"
                  d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"
                ></path>
              </svg>
            </div>

            <div className="w-24 h-24 m-auto">
              <svg
                viewBox="0 0 128 128"
                className="fill-[#F0DB4F] dark:fill-slate-50 "
              >
                <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z" />
              </svg>
            </div>

            <div className="w-32 h-32 mx-auto">
              <svg viewBox="0 0 128 128">
                <path
                  className="fill-[#0074BD] dark:fill-slate-50"
                  d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"
                />
                <path
                  className="fill-[#EA2D2E] dark:fill-slate-50"
                  d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"
                />
                <path
                  className="fill-[#0074BD] dark:fill-slate-50"
                  d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"
                />
                <path
                  className="fill-[#EA2D2E] dark:fill-slate-50"
                  d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"
                />
                <path
                  className="fill-[#0074BD] dark:fill-slate-50"
                  d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"
                />
                <path
                  className="fill-[#EA2D2E] dark:fill-slate-50"
                  d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"
                />
              </svg>
            </div>

            <div className="w-32 h-32 mx-auto">
              <svg viewBox="0 0 128 128">
                <defs>
                  <linearGradient
                    id="tailwindcss-original-wordmark-a"
                    gradientUnits="userSpaceOnUse"
                    x1="2.21"
                    y1="511.596"
                    x2="3.211"
                    y2="511.596"
                    gradientTransform="matrix(27.16757 5.6391 -9.3985 16.30055 4747.487 -8290.643)"
                  >
                    <stop offset="0" stopColor="#2298bd" />
                    <stop offset="1" stopColor="#0ed7b5" />
                  </linearGradient>
                </defs>
                <path
                  d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
                  className="fill-[url(#tailwindcss-original-wordmark-a)] dark:fill-slate-50"
                />
                <path
                  d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
                  fill="#2d3748"
                  className="fill-[#2d3748] dark:fill-slate-50"
                />
              </svg>
            </div>

            <div className="w-32 h-32 mx-auto">
              <svg viewBox="0 0 128 128">
                <path
                  className="fill-[#00618A] dark:fill-slate-50"
                  d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z"
                ></path>
                <path
                  className="fill-[#e48e00] dark:fill-slate-50"
                  d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z"
                ></path>
                <path
                  className="fill-[#00618A] dark:fill-slate-50"
                  d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"
                ></path>
              </svg>
            </div>
            {/* end icon technology */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
