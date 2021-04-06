function autocomplete(inp, arr) {
  
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var countries = [ "Ayr","Aylsham","Aylesford","Aylesbury Vale","Aylesbury","Axminster","Axbridge","Awsworth","Avington","Abbey Dore","Abbey Wood","Abbots Langley","Abbots Ripton","Abbotskerswell","Abbotts Ann","Aber","Aberaeron","Aberangell","Aberargie","Aviemore","Aveley","Audley","Auckley","Xylotymbou","Pérgamos","Kolossi","Akrotiri","Ystradowen","Ystrad Mynach","Ystrad-Meurig","Ystradgynlais","Ystalyfera","Yoxford","City of York","York","Yeovilton","Yeovil","Yelverton","Yealmpton","Yeadon","Yazor","Yaxley","Yatton","Yatton","Yate","Yarnton","Yarmouth","Yarm","Wyre Forest District","Wyre District","Wymondham","Wylam","Wye","Wycombe","Wroxall","Wroughton","Wroot","Writtle","Wrington","Wrexham","Wrexham","Wrangle","Wotton-under-Edge","Worton","Wortley","Worthing","Worle","Worlaby","Worksop","Workington","Worcestershire","Worcester","Wootton Rivers","Royal Wootton Bassett","Wootton","Wootton","Wootton","Wootton","Woolwich","Woolpit","Woolley","Wooler","Wool","Woodstock","Woodsetts","Woodley","Woodhall Spa","Wood Green","Woodford Green","Woodford","Woodford","Woodcote","Woodbridge","Woodborough","Womenswold","Wombwell","Wolvesnewton","Wolverhampton","Wolston","Wolsingham","Wollaston","Wold Newton","Wold Newton","Woldingham","Wokingham","Woking","Woburn Sands","Woburn","Wivenhoe","Wiveliscombe","Witton Gilbert","Wittering","Witney","Withington","Withington","Withernsea","Witham","Witchford","Wiston","Wistaston","Wishaw","Wisbech","Wirksworth","Winwick","Winton","Winterton","Winterbourne Stoke","Winterbourne Bassett","Winterbourne", "Winterborne Stickland","Winston","Winslow","Winsford","Winnersh","Wingfield","Wingerworth","Wingate","Wing", "Winford","Royal Borough of Windsor and Maidenhead","Windsor","Windlesham","Windermere","Winchester","Winchcombe",  "Wincanton","Wimborne Minster","Wimblington","Wiltshire","Wilton","Wilstead","Wilsford","Wilsden","Wilmslow","Williton","Willington","Willingham","Willingdon","Willey","Willerby","Willerby","Willenhall","Willaston","Willand","Wilden","Wilberfoss","Wigton","Wigston Magna","Wigmore","Wigginton","Wigginton","Wigan","Widnes","Wickwar","Wickham Market","Wickham","Wickham","Wickford","Wick","Wick","Whyteleafe","Whixall","Whitworth","Whitwick","Whitwell","Whitton","Whitton","Whitton","Whittlesey","Whittington","Whittington","Whittingham","Whitstable","Whitley Bay","Whitland","Whitford","White Waltham","Whiteparish","Whitehills","Whitehead","Whitehaven","Whitefield","Whitchurch","Whitchurch","Whitchurch","Whitchurch","Whitby","Whitburn","Whitburn","Whiston","Whippingham","Whickham","Wheldrake","Wheaton Aston","Wheathampstead","Wharram Percy","Whaplode","Whalley","Whaley Bridge","Weymouth","Weybridge","Wetwang","Wethersfield","Wetherby","West Woodhay","Westwood","West Wickham","West Wellow","West Thurrock","West Sussex","West Scrafton","Westruther","West Row","West Rainton","Westonzoyland","Weston Underwood","Weston Turville","Weston-super-Mare","Weston Point","Westoning","Weston","West Molesey","City of Westminster","West Mersea","West Malling","West Lothian","West Linton","West Lancashire District","West Kirby","West Kilbride","Westhoughton","West Hallam","Westgate on Sea","Westfield","Eilean Siar","Westerham","West End","West Drayton","West Drayton",    "West Cornforth","West Calder","West Byfleet","Westbury","Westbury","West Bromwich","West Bridgford","West Bergholt","Werrington","Wentworth","Wendron","Wendover","Wemyss Bay","Wembury","Wembley","Wem","Welwyn Hatfield","Welwyn Garden City","Welwyn","Welton","Welshpool","Wells-next-the-Sea","Wells","Wellow","Wellington","Wellington","Wellingborough","Wellesbourne Mountford","Welford","Weeting","Weeke","Wednesfield","Wednesbury","Wedmore","Weaverham","Wealden District","Waverton","Wavendon","Watton at Stone","Watton","Wattisham","Watlington","Wath upon Dearne","Watford","Water Orton","Waterlooville","Wateringbury","Waterbeach","Watchet","Washington","Washington","Warwickshire","Warwick","Warton","Wartling","Warsop","Warrington","Warrington","Warrenpoint","Warnham","Warminster","Warlingham","Warkworth","Waringstown","Wargrave","Warfield","Wareham","Ware","Wardle","Warden","Warboys","Wantage","Wansford","Wandsworth","Wanborough","Walworth","Walton-on-Thames","Walton","Walthamstow","Waltham Cross","Waltham Abbey","Waltham","Walsall","Walmsgate","Wallsend","Wallington","Wallingford","Wallasey","Wall","Walkington","Walkden","Walford","Walesby","Wales","Wales","Walberton","Wakerley","Wakefield","Wainfleet All Saints","Wadhurst","Wadebridge","Waddington","Waddesdon", "Wacton","Virkie","Victoria","Verwood","Ventnor","Valley","Vale of White Horse District","Vale of Glamorgan","Uxbridge","Uttoxeter","Utley","Usk","Ushaw Moor","Urmston","Upton upon Severn","Upton Scudamore","Upton","Uppingham","Upper Helmsley","Upper Hale","Upper Arley","Upminster","Upavon","United Kingdom of Great Britain and Northern Ireland","Undy","Ulverston","Ulrome","Ulley","Ulleskelf","Ullapool","Ulceby","Ufford","Uffculme","Uddingston","Uckfield","Tytherington","Tynemouth","Tyldesley","Tydd Saint Mary","Twyford","Twickenham","Tuxford","Turriff","Turnhouse","Turnastone","Truro","Trumpington","Trowbridge","Trostre","Troon","Tring","Trimdon","Trewen","Trevor","Treuddyn","Treorchy","Tremaine","Trelech","Treherbert","Treharris","Tregynon","Tre-groes","Tregoney","Trefriw","Trefnant","Treeton","Tredegar","Trawsfynydd","Tranent","Trafford Park","Town Moor","Townhill","Town Green","Tow Law","Tower Hamlets","Towcester","Totton","Tottington","Totternhoe","Totnes","Totland","Torthorwald","Torry","Torridge District","Torquay","Torpoint","Torphins","Topsham","Tonyrefail","Tong","Tonbridge","Tollesbury","Todwick","Todmorden","Toddington","Todber","Tiverton","Tisbury","Tirley","Tiptree","Tinwell","Timsbury","Timberland","Tilty","Tillicoultry","Tilehurst","Tilbury","Tideswell","Tickhill","Tickencote","Tichborne","Tibshelf","Thwing","Thurston","Thurso","Borough of Thurrock","Thruxton","Three Rivers","Three Legged Cross","Threekingham","Thrapston","Thorp Arch","Thornton Dale","Thornton","Thornton","Thornton","Thornley","Thornhill","Thornhaugh","Thorngumbald","Thorney","Thorner","Thorne","Thornbury","Thornaby-on-Tees","Thirsk","Theydon Bois","Thetford","Theale","Thaxted","Thatcham","Thanet District","Thames Ditton","Thame","Teynham","Tewkesbury","Teversham","Tetney","Tetbury","Terrington Saint John","Terrington St Clement","Tenterden","Tenby","Tenbury Wells","Tempsford","Templeton","Templepatrick","Teignmouth","Teddington","Tayport","Taynuilt","Tawstock","Tavistock","Tavernspite","Taunton","Tattenhall","Tarvin","Tarrant Monkton","Tarporley","Tarleton","Tarbolton","Tarbert","Tanfield","Tandragee","Tamworth","Talsarnau","Takeley","Tain","Tadworth","Tadley","Tadcaster","Syston","Swinton","Swingfield","Swineshead","Swindon","Swindon","Swillington","Swavesey","Swan Village","Swansea","Swanscombe","Swannington","Swanmore","Swanley","Swanage","Swallow","Swaffham","Swadlincote","Sutton upon Derwent","Sutton Scotney","Sutton-in-Craven","Sutton in Ashfield","Sutton Courtenay","Sutton Coldfield","Sutton Bridge","Sutton Bonington","Sutton","Sutton","Sutton","Surrey Heath"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
