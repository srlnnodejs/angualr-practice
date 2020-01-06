import {PageoneComponent} from "./pageone.component"
import {PagetwoComponent} from "./pagetwo.component"
import {ChildoneComponent} from "./childone.component"
import {ChildtwoComponent} from "./childtwo.component"
import {Routes} from "@angular/router";
export const AppRoutes:Routes=[
{path:"page_one",component:PageoneComponent,
children:[{path:"child_one",component:ChildoneComponent}]},
{path:"page_two",component:PagetwoComponent,
children:[{path:"child_two",component:ChildtwoComponent}]}]

