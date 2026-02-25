import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {EventsOverviewPageComponent} from "./components/events/events-overview-page/events-overview-page.component";
import {EventPageComponent} from "./components/events/event-page/event-page.component";
import {MembersOverviewPageComponent} from "./components/members/members-overview-page/members-overview-page.component";
import {MemberPageComponent} from "./components/members/member-page/member-page.component";
import {MembershipsPageComponent} from "./components/memberships-page/memberships-page.component";
import {OurStoryPageComponent} from "./components/our-story-page/our-story-page.component";
import {PodcastPageComponent} from "./components/podcast-page/podcast-page.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'events-overview', component: EventsOverviewPageComponent},
  {path: 'event', component: EventPageComponent},
  {path: 'members-overview', component: MembersOverviewPageComponent},
  {path: 'member', component: MemberPageComponent},
  {path: 'memberships', component: MembershipsPageComponent},
  {path: 'our-story', component: OurStoryPageComponent},
  {path: 'podcast', component: PodcastPageComponent}
];
