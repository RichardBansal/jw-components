import { dispatch, register } from './DashboardDispatcher';
import { EventEmitter } from 'events';
import Actions from './DashboardConstants';
import {dashboard} from './DashboardStaticData';

const {city, walks, resources, blog} = dashboard;

//TODO: Review against ItineraryStore for consistency of format

const DashboardStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCityData() {
    const {latlng, cityOrganizer, name, users, walks, impact} = city;
    return {latlng, cityOrganizer, name, users, walks, impact}; //TODO: What is the best way to do this?
  },

  getCityWalks() {
    const {walks, filters} = city;
    return {walks, filters};
  },

  getMyWalks() {
    return walks;
  },

  getWalkLeadersAndVolunteers() {
    const {walkLeaders} = city;
    return {walkLeaders};
  },

  getResources() {
    return resources;
  },

  getLatestPost() {
    return {post:blog[0]};
  },

  //TODO: dispatcher index

});

export default DashboardStore