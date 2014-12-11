---
title: Art installation &#35;1
description: Solar System
image:
date: 2014-11-21
tags: Art
author: Brian Anders
published: false
---

<style>
  system {
    float: left;
    width: 100%;
    padding-top: 100%;
    height: 0;
    position: relative;
  }
  planet, sun {
    background: grey;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  sun, planet, moon, orbit {
    border-radius: 9999px;
    display: block;
    height: 0px;
    position: absolute;
    box-shadow: 0 0 1px black;
  }
  sun {
    background: yellow;
    padding-top: 69.6342%;
    width: 69.6342%;
  }
  label {
    position: absolute;
    left: 50%;
    bottom: -20px;
    font-size: 11px;
    transform: translateX(-50%);
  }
  orbit {
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  orbit.mercury {
    width: 100%;
    padding-top: 100%;
  }
  planet.mercury {
    padding-top: 0.2439%;
    width: 0.2439%;
    left: 50%;
  }
  orbit.venus {
    width: 110%;
    padding-top: 110%;
  }
  planet.venus {
    padding-top: 0.6051%;
    width: 0.6051%;
    left: 55%;
  }
  orbit.earth {
    width: 120%;
    padding-top: 120%;
  }
  planet.earth {
    padding-top: 0.6371%;
    width: 0.6371%;
    left: 60%;
  }
  orbit.mars {
    width: 130%;
    padding-top: 130%;
  }
  planet.mars {
    padding-top: 0.3389%;
    width: 0.3389%;
    left: 65%;
  }
  orbit.jupiter {
    width: 140%;
    padding-top: 140%;
  }
  planet.jupiter {
    padding-top: 6.9911%;
    width: 6.9911%;
    left: 70%;
  }
  orbit.saturn {
    width: 160%;
    padding-top: 160%;
  }
  planet.saturn {
    padding-top: 5.8232%;
    width: 5.8232%;
    left: 80%;
  }
  orbit.uranus {
    width: 180%;
    padding-top: 180%;
  }
  planet.uranus {
    padding-top: 2.5362%;
    width: 2.5362%;
    left: 90%;
  }
  orbit.neptune {
    width: 190%;
    padding-top: 190%;
  }
  planet.neptune {
    padding-top: 2.4622%;
    width: 2.4622%;
    left: 95%;
  }
  .Ganymede {
    padding-top: 0.2634%;
    width: 0.2634%;
  }
  .Titan {
    padding-top: 0.2576%;
    width: 0.2576%;
  }
  .Callisto {
    padding-top: 0.2410%;
    width: 0.2410%;
  }
  .Io {
    padding-top: 0.1821%;
    width: 0.1821%;
  }
  .moon {
    padding-top: 0.1737%;
    width: 0.1737%;
  }
  .Europa {
    padding-top: 0.01560.8%
    width: 0.01560.8%
  .Triton {
    padding-top: 0.1353%
    width: 0.1353%
  .PlutoR {
    padding-top: 0.1184%
    width: 0.1184%
  .ErisR {
    padding-top: 0.1163%
    width: 0.1163%
  .Titania {
    padding-top: 0.0788%
    width: 0.0788%
  .Rhea {
    padding-top: 0.0763%
    width: 0.0763%
  .Oberon {
    padding-top: 0.0761%
    width: 0.0761%
  .Iapetus {
    padding-top: 0.0734%
    width: 0.0734%
  .MakemakeR {
    padding-top: 0.0715%
    width: 0.0715%
  .HaumeaR {
    padding-top: 0.0715%
    width: 0.0715%
  .OR-2007 {
    padding-top: 0.0640%
    width: 0.0640%
  .Charon {
    padding-top: 0.0603%
    width: 0.0603%
  .Umbriel {
    padding-top: 0.0584%
    width: 0.0584%
  .Ariel {
    padding-top: 0.0578%
    width: 0.0578%
  .Dione {
    padding-top: 0.0561%
    width: 0.0561%
  .Quaoar {
    padding-top: 0.0555%
    width: 0.0555%
  .Tethys {
    padding-top: 0.0531%
    width: 0.0531%
  .SednaRA {
    padding-top: 0.0500%
    width: 0.0500%
  .Ceres {
    padding-top: 0.0476%
    width: 0.0476%
  .MS-2002 {
    padding-top: 0.0467%
    width: 0.0467%
  .OrcusR {
    padding-top: 0.0458%
    width: 0.0458%
  .Salacia {
    padding-top: 0.0425%
    width: 0.0425%
  orbit {
    background: transparent;
    border: 5px solid white;
  }
</style>

<system>
  <sun>
    <label>the sun</label>
  </sun>
  <orbit class="mercury"></orbit>
  <planet class="mercury">
    <label>mercury</label>
  </planet>
  <orbit class="venus"></orbit>
  <planet class="venus">
    <label>venus</label>
  </planet>
  <orbit class="earth"></orbit>
  <planet class="earth">
    <label>earth</label>
    <moon class="moon"></moon>
  </planet>
  <orbit class="mars"></orbit>
  <planet class="mars">
    <label>mars</label>
    <moon class="Phobos"></moon>
    <moon class="Deimos"></moon>
  </planet>
  <orbit class="jupiter"></orbit>
  <planet class="jupiter">
    <label>jupiter</label>
    <moon class="Io"></moon>
    <moon class="Europa"></moon>
    <moon class="Ganymede"></moon>
    <moon class="Callisto"></moon>
    <moon class="Amalthea"></moon>
    <moon class="Himalia"></moon>
    <moon class="Elara"></moon>
    <moon class="Pasiphae"></moon>
    <moon class="Sinope"></moon>
    <moon class="Lysithea"></moon>
    <moon class="Carme"></moon>
    <moon class="Ananke"></moon>
    <moon class="Leda"></moon>
    <moon class="Thebe"></moon>
    <moon class="Adrastea"></moon>
    <moon class="Metis"></moon>
    <moon class="Callirrhoe"></moon>
    <moon class="Themisto"></moon>
    <moon class="Megaclite"></moon>
    <moon class="Taygete"></moon>
    <moon class="Chaldene"></moon>
    <moon class="Harpalyke"></moon>
    <moon class="Kalyke"></moon>
    <moon class="Iocaste"></moon>
    <moon class="Erinome"></moon>
    <moon class="Isonoe"></moon>
    <moon class="Praxidike"></moon>
    <moon class="Autonoe"></moon>
    <moon class="Thyone"></moon>
    <moon class="Hermippe"></moon>
    <moon class="Aitne"></moon>
    <moon class="Eurydome"></moon>
    <moon class="Euanthe"></moon>
    <moon class="Euporie"></moon>
    <moon class="Orthosie"></moon>
    <moon class="Sponde"></moon>
    <moon class="Kale"></moon>
    <moon class="Pasithee"></moon>
    <moon class="Hegemone"></moon>
    <moon class="Mneme"></moon>
    <moon class="Aoede"></moon>
    <moon class="Thelxinoe"></moon>
    <moon class="Arche"></moon>
    <moon class="Kallichore"></moon>
    <moon class="Helike"></moon>
    <moon class="Carpo"></moon>
    <moon class="Eukelade"></moon>
    <moon class="Cyllene"></moon>
    <moon class="Kore"></moon>
    <moon class="Herse"></moon>
  </planet>
  <orbit class="saturn"></orbit>
  <planet class="saturn">
    <label>saturn</label>
    <moon class="Mimas"></moon>
    <moon class="Enceladus"></moon>
    <moon class="Tethys"></moon>
    <moon class="Dione"></moon>
    <moon class="Rhea"></moon>
    <moon class="Titan"></moon>
    <moon class="Hyperion"></moon>
    <moon class="Iapetus"></moon>
    <moon class="Erriapus"></moon>
    <moon class="Phoebe"></moon>
    <moon class="Janus"></moon>
    <moon class="Epimetheus"></moon>
    <moon class="Helene"></moon>
    <moon class="Telesto"></moon>
    <moon class="Calypso"></moon>
    <moon class="Kiviuq"></moon>
    <moon class="Atlas"></moon>
    <moon class="Prometheus"></moon>
    <moon class="Pandora"></moon>
    <moon class="Pan"></moon>
    <moon class="Ymir"></moon>
    <moon class="Paaliaq"></moon>
    <moon class="Tarvos"></moon>
    <moon class="Ijiraq"></moon>
    <moon class="Suttungr"></moon>
    <moon class="Mundilfari"></moon>
    <moon class="Albiorix"></moon>
    <moon class="Skathi"></moon>
    <moon class="Siarnaq"></moon>
    <moon class="Thrymr"></moon>
    <moon class="Narvi"></moon>
    <moon class="Methone"></moon>
    <moon class="Pallene"></moon>
    <moon class="Polydeuces"></moon>
    <moon class="Daphnis"></moon>
    <moon class="Aegir"></moon>
    <moon class="Bebhionn"></moon>
    <moon class="Bergelmir"></moon>
    <moon class="Bestla"></moon>
    <moon class="Farbauti"></moon>
    <moon class="Fenrir"></moon>
    <moon class="Fornjot"></moon>
    <moon class="Hati"></moon>
    <moon class="Hyrrokkin"></moon>
    <moon class="Kari"></moon>
    <moon class="Loge"></moon>
    <moon class="Skoll"></moon>
    <moon class="Surtur"></moon>
    <moon class="Greip"></moon>
    <moon class="Jarnsaxa"></moon>
    <moon class="Tarqeq"></moon>
    <moon class="Anthe"></moon>
    <moon class="Aegaeon"></moon>
  </planet>
  <orbit class="uranus"></orbit>
  <planet class="uranus">
    <label>uranus</label>
    <moon class="Cordelia"></moon>
    <moon class="Ophelia"></moon>
    <moon class="Bianca"></moon>
    <moon class="Cressida"></moon>
    <moon class="Desdemona"></moon>
    <moon class="Juliet"></moon>
    <moon class="Portia"></moon>
    <moon class="Rosalind"></moon>
    <moon class="Mab"></moon>
    <moon class="Belinda"></moon>
    <moon class="Perdita"></moon>
    <moon class="Puck"></moon>
    <moon class="Cupid"></moon>
    <moon class="Miranda"></moon>
    <moon class="Francisco"></moon>
    <moon class="Ariel"></moon>
    <moon class="Umbriel"></moon>
    <moon class="Titania"></moon>
    <moon class="Oberon"></moon>
    <moon class="Caliban"></moon>
    <moon class="Stephano"></moon>
    <moon class="Trinculo"></moon>
    <moon class="Sycorax"></moon>
    <moon class="Margaret"></moon>
    <moon class="Prospero"></moon>
    <moon class="Setebos"></moon>
    <moon class="Ferdinand"></moon>
  </planet>
  <orbit class="neptune"></orbit>
  <planet class="neptune">
    <label>neptune</label>
    <moon class="Triton"></moon>
    <moon class="Nereid"></moon>
    <moon class="Naiad"></moon>
    <moon class="Thalassa"></moon>
    <moon class="Despina"></moon>
    <moon class="Galatea"></moon>
    <moon class="Larissa"></moon>
    <moon class="Proteus"></moon>
    <moon class="Halimede"></moon>
    <moon class="Psamathe"></moon>
    <moon class="Sao"></moon>
    <moon class="Laomedeia"></moon>
    <moon class="Neso"></moon>
  </planet>
  <object class="pluto">
    <moon class="Charon"></moon>
    <moon class="Hydra"></moon>
    <moon class="Nix"></moon>
    <moon class="Stix"></moon>
    <moon class="Kerberos"></moon>
  </object>
  <object class="eris">
  </object>
  <object class="makemake">
  </object>
  <object class="pluto">
  </object>
  <object class="pluto">
  </object>
  <object class="pluto">
  </object>
</system>

