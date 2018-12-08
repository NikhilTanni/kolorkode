import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  color:any={};
  rgb:any;
  hex:any;
  invert:any="#ffffff";
  borderinvert:any="#ffffff";
  mod_info=0;
  sessionid:any="";
  ip:any="";
  constructor(public navCtrl: NavController) {
    // this.init_colors();
    // this.sessionid=this.guid();
    // this.updatesession();
  }

  // async updatesession(){
  //   this.afd.list('/userdata/'+this.sessionid+'/sessionon/').push(new Date().toISOString());
  // }
  init_colors(){
    for(var i=0;i<3;i++){
      this.color[i]=[];
      for(var j=0;j<256;j++){
        this.color[i].push([j,0,0]);
      }
    }
    console.log(this.color);
  }

  rgbtohex(ev){
    if(this.rgb==null || this.rgb.length<1){
      this.hex="";
    }
    else{
      var tmp=this.rgb;
      var tmp_arr=tmp.split(",");
      var hexstr="";
      for(var i=0;i<3;i++){
        if(("0"+(Number(tmp_arr[i]).toString(16))).slice(-2).toUpperCase() != "AN"){
          hexstr=hexstr+("0"+(Number(tmp_arr[i]).toString(16))).slice(-2).toUpperCase();
        }
      }
      this.hex = "#"+hexstr;
    }
      this.invertcolor();
      // this.pushitemtofirebase({'torgb' : this.rgb, 'fromhex':this.hex, 'key':ev.target.value});
  }

  hextorgb(ev){

    var tmp = this.hex_comp(this.hex);
    this.rgb="";
    try{
      if(isNaN(tmp['r'])){
        this.rgb=this.rgb+"??";
      }
      else{
        this.rgb=this.rgb+tmp['r'];
      }
      this.rgb=this.rgb+",";
      if(isNaN(tmp['g'])){
        this.rgb=this.rgb+"??";
      }
      else{
        this.rgb=this.rgb+tmp['g'];
      }
      this.rgb=this.rgb+",";
      if(isNaN(tmp['b'])){
        this.rgb=this.rgb+"??";
      }
      else{
        this.rgb=this.rgb+tmp['b'];
      }

    } catch(e){
      console.log(e);
    }

      this.invertcolor();
      // this.pushitemtofirebase({'fromrgb' : this.rgb, 'tohex':this.hex, 'key':ev.target.value});
  }



  hex_comp(hex){
    // var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    // console.log(result);
    var spl="";

    var ar=[];
    for(var i=1;i<hex.length;i++){
      if(i%2==1){
        spl=hex[i];
      }
      else{
        spl=spl+hex[i];
        ar.push(spl);
      }
    }
    // console.log(ar);
    return ar ? {
        r: parseInt(ar[0], 16),
        g: parseInt(ar[1], 16),
        b: parseInt(ar[2], 16)
    } : null;
  }


  invertcolor(){
    var hexx=this.hex.substring(1,this.hex.length);
    // convert 3-digit hex to 6-digits.
    if (hexx.length === 3) {
        hexx = hexx[0] + hexx[0] + hexx[1] + hexx[1] + hexx[2] + hexx[2];
    }
    // if (hexx.length !== 6) {
    //     throw new Error('Invalid HEX color.');
    // }
    // invert color components
    var r = (255 - parseInt(hexx.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hexx.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hexx.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    this.invert = '#' + this.padZero(r,2) + this.padZero(g,2) + this.padZero(b,2);
}

padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  toggle_mod_info(){
    if(this.mod_info==0){
      this.mod_info=1;
    }
    else{
      this.mod_info=0;
    }
  }
  mail(email){
    window.open('mailto:'+email);
  }

  // pushitemtofirebase(keys){
  //   var tmp={
  //       'time':new Date().toISOString(),
  //       'keys':keys
  //     };
  //   console.log(this.afd.list('/userdata/'+this.sessionid+'/').push(tmp));
  //
  // }

  // guid() {
  // function s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   }
  //   return s4() + s4() + s4();
  // }

}
