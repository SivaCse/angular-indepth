# Angular 5/6/7

# CLI Commands

# Install Commands

    * sudo npm i -g @angular/cli@latest
    * npm i --save package  => to save as a production dependency
    * ng build --prod --aot

# Generation commands

    * ng new my-new-app
    * ng g c my-component / ng generate component parent-folder/my-component
    * ng g pipe my-pipe

# Running App

    * ng serve => localhost:4200/

# Setting Up Bootstrap

    - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/9118764?start=0

# TypeScript

    - https://www.typescriptlang.org/docs/handbook/basic-types.html

# Angular Start up steps

    1. main.ts gets loaded
    2. platformBrowserDynamic().bootstrapModule(AppModule) in main.ts gets loaded
    3. src/app.module gets loaded and all related files to it.

# Decorators

    - @Component, @Directive, @Input, @Output, @ViewChild, @ContentChild, @HostBinding, @HostListener
      @Injectable, @Pipe

# Components

    - @Component({selector, templateUrl/template, styleUrls, encapsulation, providers})
    - need to add under "declarations" section of the parent component
    - multiple way's to use selector's instead of <app-root></app-root>, <div app-root> </div>, <div class="app-root"> Section 2, 21 lecture
    - All properties inside a component are accessible only inside it
    - LifeCycle Hooks (Section 5, 72), we have seperate hooks for views and contents(ng-content)
        - constructor() {
            1st
            console.log('constructor called');
        }

       -  ngOnChanges(changes: SimpleChange){
            // only one hook to get an argument
            // element is this input element
            //console.log(changes);
            console.log('ngOnChanges called');
        }

       -  ngOnInit() {
           2nd
            console.log('ngOnInit called');
        }

        - ngDoCheck() {
            // for any change detection
            console.log('ngDoCheck called');
        }

        - ngAfterContentInit() {
            // runs when the ng-content is used and the content from parent is inserted into
            console.log('ngAfterContentInit called');
        }

        - ngAfterContentChecked() {
            // gets call after change detection
            console.log('ngAAfterContentChecked called');
        }

        - ngAfterViewInit() {
            // something like dom ready, once all elements loaded then we can access
            // can access all properties after intialized
            console.log('AfterViewInit called');
        }

        - ngAfterViewChecked() {
            // after the content is checked
            console.log('ngAfterViewChecked called');
        }

        - ngOnDestroy() {
            // called when component destroyed
            console.log('ngOnDestroy called');
        }

# Templates

    - methods also can be called in templates => {{ getMethodName() }}
    - {{ allowServer }} => <p [innerText]="allowServer"></p> setting the innerText property

# Local References From Templates And Projecting Content

    - Using Local Reference without using @ViewChild
        - In Template
            - <input type="text" class="form-control" #serverNameInput>
            - <button class="btn btn-primary" (click)="onAddServer(serverNameInput)">Add Server</button>
        - In Component
            - onAddServer(serverNameInput: HTMLInputElement) {console.log(serverNameInput);}

        - In Template Using @ViewChild
            <input type="text" class="form-control" #serverContentInput>
        - In Component
            - @ViewChild('serverContentInput') serverContentInput: ElementRef;
            - this.serverContentInput.nativeElement.value;

        - Get hold of child component
            - @ViewChild(CustomerFormComponent) child: CustomerFormComponent;
            - https://github.com/raj23manj/customer-manager/blob/680ba717dd1825c3db03b5a89a79c80e3da02c3e/src/app/customers/customers.component.ts

    - Passing Code from parent compontent to child like ember yield or Projecting Contents into Components with ng-content
        - In Parent Template
            - <app-server-element *ngFor="let serverElement of serverElements"
                          [srvElement]="serverElement">
                    <p>
                    <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
                    <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
                    </p>
             </app-server-element>
        - In Child component
            - <div class="panel-body">
                <ng-content></ng-content>
              </div>

    - Access ng-content elements using  @ContentChild (Section 5)
        - In Parent Template
            - <app-server-element
                *ngFor="let serverElement of serverElements"
                [srvElement]="serverElement"
                [name]="serverElement.name">
                <p #contentParagraph> =>
                <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
                <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
                </p>
             </app-server-element>

        - In Child Component
            - @ContentChild('contentParagraph') paragraph: ElementRef;

# String Interpolation

    - assiging value from component property to template
    - <p [innerText]="allowServer"></p>
    - [property] = "data" => <button [disabled]="allowServer">
    - {{ getMethodName() }}
    - {{ allowServer }}

# Binding(Data/property/Events)

    - One Way
        - from component to template
            - String interpolation {{ data }}
            - Property Binding [property] = "data" => <button [disabled]="allowServer">, in component => allowServer: boolean = true
            -  <img  [src]="recipe.imagePath" alt="{{ recipe.name }}"> => propery binding
            -  <img  src= {{recipe.imagePath}} alt="{{ recipe.name }}">

        - from template to component
            - Event Binding (event) = "expression" => (click) = "method()"

    - Two way Binding
        - [(ngModel)] = "data"
        - to enable two-way binding => https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655876?start=0

    - In Components
        - @Output()
            - In Parent Template
                - <app-cockpit (serverCreated)="onServerAdded($event)" (bpCreated)="onBlueprintAdded($event)"
    ></app-cockpit>
            - In Child Component
                - without Alias => @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
                - with Alias => @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

        - @Input()
            - In Parent Template using alias
                - <app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement">
            - In Child Component
                - @Input('srvElement') element: {type: string, name: string, content: string};

            - In Parent Template without alias
                - <app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement">
            - In Child Component
                - @Input() element: {type: string, name: string, content: string};

# Events

    - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655990?start=0
    - onClick => (click) = "method()", (input) = "method()"
    - passing data emmited by the event using $event => (click) = "method($event)" (28, section 2)
    - in component method(event: Event) { (<HTMLInputElement>event.target).value }

# Directives

    - Instructions in the DOM
    - Components are directives with a template

    - Inbuilt Directive's
        - Structural Directive -> it changes the dom
            - *ngIf => <p *ngIf="component-property/method()/inline statement"> (ifelse section 2, 34)
            - *ngFor => <app-server *ngFor="let server of servers"></app-server>
            - *ngFor with index => <li *ngFor="let detail of details; let i = index">
            - <div [ngSwitch]="value">
                    <p *ngSwitchCase="5">5</p>
                    <p *ngSwitchCase="10">10</p>
                    <p *ngSwitchDefault>Default</p>
                </div>
            -  <ng-template [ngIf]="onlyOdd">
                    <p>Only odd</p>
                </ng-template>

        - Attribute Directives => only change the element they were placed on
            - ngStyle => <p [ngStyle]="{'backgroundColor': getColor()}">
            - ngClass => <p [ngStyle]="{'backgroundColor': getColor()}"
                            [ngClass]="{online: serverStatus === 'online'}"  > (online will be the class)

    - Custom Directive (Section 7 & 8)
        - @Directive({selector: "[appBasicHighLight]"}) => <p appBasicHighLight> Style</p>
        - this is be recognised in templates oly by name appBasicHighLight as attribute, if only 'appBasicHighLight' is used then it will be an element
        - directive has only onInit and onDestroy hooks
        - Need to mention in the parents @NgModule's declaration to use it, just like new components
        - To Change a Style by default
            - // this approach is not advisable
              ngOnInit() {
                  this.elementRef.nativeElement.style.backgroundColor = "green";
              }
        - Using Renderer to access elements and style
            - https://angular.io/api/core/Renderer2
            - In Template's
                - <p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'"> Style</p>
                - Use @Input() in the directive declaration to access the properties
            - In Directive declarations File
                - @Directive({selector: '[appBetterHighlight]'})
                - Use @Input() in the directive declaration to access the properties
                - Use this to set style or access element
                    - ngOnInit(){
                            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
                            //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow', '!important');
                        }
                - @HostBinding()
                    - use this if need to change stles, renderer is also fine
                    - in Directive declaraion file
                        - @HostBinding('style.backgroundColor') backgroundColor: string;
                        - this.backgroundColor = 'transparent'

                - @HostListener()
                    - similar to listening events in jquery onhover / on leave but w.r.t to the directive  - - in Directive declaraion file
                        - @HostListener('mouseenter') mouseover(eventData: Event){
                            //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
                            this.backgroundColor = this.highlightColor;
                        }

            - Custom Structural Directive
                - In Template
                    -  <div *appUnless="onlyOdd"></div>
                - In Directive Definition
                    - Section 7, 92
                    - vcRef = view container ref (what to insert, where to insert )

# Creating Model File (our Convinence)

    - Blueprint for objects we create
    - export class Ingredient {
        constructor(public name: string, public amount: number){
            }
        }
    - export class Ingredient {
        public name: String,
        public amount: number,

        constructor(name: string, amount: number){
              this.name = name;
              this.amount = amount;
            }
        }

# View Encapsulation

    - Section 5, 67
    - css rules in each component is restricted to that component only
    - Angular creates and forces style encapsulation, by creating a unique attribute name. This is the default behaviour
    - Emulates shadow dom
    - Values
      - ViewEncapsulation.None => remove default behaviour, so add css in one component it affects in other componentes
      - ViewEncapsulation.Native => supports shadow dom, but only few browsers support it
      - ViewEncapsulation.Emulated => default

# Services & Dependency Injection (Section 9)

    - Either I can go top-down or viceversa or use services to maintain cross component communications
    - Used to manage Data (Section 111)
    - A service is a normal typescript class
    - Angular DI injects the service
    - Need to tell angular to privide a service, how to create it
    - set in components provider property to use the service
        - @Component({providers}) or @NgModule({providers}) => global level
    - In Component
        - constructor(loggingService: LoggingService){}
    - Hierarchical Injector(Section9, 101)
        - DI is Hierarchical Injector, which means when service is created it will be available for itself and all its child. So need to mention it parent one.
        - Where All To Metion the Service
            - AppModule(Highest Level) => will be available every where
            - AppComponent => AppComponent and it;s child will have refference to service
            - Any other Component => lowest level, only for that and child and it overrides the parent service if we mention the same service in the child
            - In child components remove from provider's and angular will load same instance from parent, but keep the constructor to inject
    - Injecting Services into a Service
        - To inject a service into another service, the service which needs to be injected should be mentioned at the global level(AppModule), then only  we can inject
        - use @Injectable() to do, use if anyother service is to be injected here to this current files
    - Cross Component Communication
        - Use Event Emmitter's and subscribe them
    - Alternate way to set global Service(105), this helps in lazily loaded services by angular for better performance
        - @Injectable({providedIn: 'root'})
          export class MyService { ... }
    - Passing Data
      - data change will be triggered from service property where data is addede, if using slice, then need to push changes (https://github.com/raj23manj/recipie-shopping/commit/42d0b828b678cb63eebebca7ce8e5630303ab37e)

# Routing(section 11)

    - Define in the AppModule
    - Define routes, using Routes object. pattern appRoutes : Routes = [{path: '', component: '', canActivate: [AuthGuard],
      canActivateChild: [AuthGuard], data: {any: ''}, redirectTo: '',
      children: [{path: '', component: '', resolve: {}, canDeactivate}]}]

    - Redirecting and WildCard Routes
        - { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!'} },
            -  this.route.data.subscribe((data: Data) => {
                    this.errorMessage = data['message'];
                });
        - { path: '**', redirectTo: '/not-found' } => this should be at the last always
        - { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
        - -  By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just, hence use full like above(134)
        -   { path: '**', redirectTo: '/not-found' }

    - Register defined routes in @NgModule (135)
      - @NgModule({
            imports: [
                // RouterModule.forRoot(appRoutes, {useHash: true})
                RouterModule.forRoot(appRoutes)
            ],
            exports: [
                RouterModule
            ]});
    - In Template
        - <router-outlet></router-outlet> => to make routes work
        - Links
            - navigation is not done using  href=""
            - routerLink => path ot the url, it knows the current path and which component it sits
                - <a routerLink="/">Home</a>
                - <a [routerLink]="['/', 'something']">Home</a> => property binding
            - Relative and Absolute paths(119)
                - Relative Path => appends path to the end of current path(localhost:4200/servers). Used in nested routes, reloading same page
                    - <a [routerLink]="['servers']">Home</a> => if current page is localhost:4200/servers then path will be localhost:4200/servers/servers
                - Absolute Path => appends path to the end of root domain
                    - <a [routerLink]="['/servers']">Home</a> => if current page is localhost:4200/servers then path will be localhost:4200/servers
            - routerLinkActive
                - To add active class to current element
            - routerLinkActiveOptions
                - To match excat match of ulr to be active. ex '/users' will match '/' and '/users' to avoid this
            - Complete example
                - <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    <a routerLink="/">Home</a>
                </li>

    - Load Route Programtically or from Component
        - In Component
            - this.router.navigate dose not know the current path
            - Basic with absolute path
                - constructor(private router: Router) { }
                - this.router.navigate(['/servers']); => an absolute path
            - Basic with relative path, this.router.navigate dose not know the current path hence we need pass a parameter
                - constructor(private router: Router, private route: ActivatedRoute) { }
                - this.router.navigate(['servers'], {relativeTo: this.route}); => an relative path
            - ActivatedRoute
                - used to get the currently activated route
            -  Router
                - used to navigae around

    - Dynamic Routing
        - { path: ':id/:name', component: UserComponent }

    - Access Route Data in Component(Section 11)
        - ActivatedRoute used to get the current url
        - this.route.snapshot.params['id'] => used to access the params, work for first time intialisation only. For subsequent reloads, see below example
        - Example
            -   constructor(private route: ActivatedRoute) { }
                ngOnInit() {
                    this.user = {
                        id: this.route.snapshot.params['id'],
                        name: this.route.snapshot.params['name']
                    }
        - Reloading component and getting params
            - when ever reloading the same component or page instead to re-intialise the component which is aperformance issue
            - this.route.params => this is a observable
            - angular handles destroying of this subscription automatically for route observables, if not we would have needed to handle it. No need of Subsription and adding it onDestroy()
            -   Example
                -   this.route.params
                            .subscribe(
                                (params: Params) => {
                                // when ever params changes this function executes
                                this.user.id = params['id'];
                                this.user.name = params['name'];
                                },
                            );
            -  Typecast to a number params which is a strign
                -  +params['id']; => + is to number cast

        - Passing Query Parmas(?query=10) and Fragments(using /users#something)
            - From Template
                -  <a
                    [routerLink]="['/servers', server.id]"
                    [queryParams]="{allowEdit: server.id === 3 ? '1' : '0'}"
                    fragment="loading"
                    href="#"
                    class="list-group-item"
                    *ngFor="let server of servers">
                    {{ server.name }}
                </a> => localhost:4200/something?allowEdit=1#loading
            - From Component
                -  this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});

        - Retriveing Query Params
            - this also has same issue oly when component is created params are passed, if accessed from same page need observable
            - Use ActivatedRoute
            - console.log(this.route.snapshot.queryParams);
              console.log(this.route.snapshot.fragment);

              // in that case when on same page accesse, angular handles unsubscriptions here
              this.route.queryParams.subscribe(
              (queryParams: Params) => {
                this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
              });
              this.route.fragment.subscribe();
            -  In Component while dynamic routing
                - Default is to drop the query params
                - queryParamsHandling => merge ,to add more params
                - queryParamsHandling => preserve, to preserve
                - this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

    - Nested Routes
        - Example
            - In Template
                - in parent component here in example server add <router-outlet></router-outlet>
            - In App.Routes
                -   { path: 'servers',
                        //canActivate: [AuthGuard],
                        canActivateChild: [AuthGuard],
                        component: ServersComponent,
                        children:[
                        { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
                        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
                    ] }

    - Guards
        - Executed once a route is loaded or we leave a route
        - canActivate
            - canActivate: [service],
        - canActivateChild(138) => to make child menu visible but auth needed, make only child routes protected
            - canActivateChild: [service],
        - canDeactivate(140), control whether to leave a route
            - if back button clicked on the browser or any other links in the app, ask user if he wants to stay
            - canDeactivate: [service]
        - Service Implementations (137, 138, 139)

    - Passing Static data
        - { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found!'} },
        - this.route.data.subscribe((data: Data) => {
            this.errorMessage = data['message'];
          });
    - Passing Dynamic Data =>  with resolve guard
        - Run some code before a route is rendered(backend fetching or any pre loading)
        - { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
        -  this.route.data.subscribe((data: Data) => {
              this.server = data['server'];
           });
        - Need to create a resolver(142)

    - Location Strategies
        - 143
        - In Production we need to send indexhtml to prevent error
        - One more option is below
        - To enable hash mode routing => /#/...
            - RouterModule.forRoot(appRoutes, {useHash: true})

# Observables(RxJs - Section 13)

    - http://reactivex.io/rxjs/
    - It is a Data Source
    - rxjs uses the library => for Angular 6+ "rxjs": "^6.0.0-rc.1"
    - with Angular6 + to use angular 5 like syntax for observable use rxjs-compact

    - Observer/Subscriber
        - Handle Data
        - Handle Error
        - Handle Completion
        - Example
        -   observable.subscribe(
            () => { console.log('success call') },
            () => { console.log('error call') },
            () => { console.log('Completion call') }
        );

    - Custom Observable

        - numbersSubscription: Subscription;
        - const myNumbers = Observable.interval(1000)
                .map(
                    (data: number) => {
                    return data * 2 ;
                    }
                );

        - this.numbersSubscription = myNumbers.subscribe((number: number) => {
                //using default utility package of Observable
                console.log(number);
            });

        - const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('first package'); // next pushes the next data
            }, 2000);

            setTimeout(() => {
                observer.next('Second package');
            }, 4000);

            // after complete or error the 6 seconds call will not be triggered

            setTimeout(() => {
                observer.error('this does not work'); // pushes error
            }, 5000);

            // setTimeout(() => {
            //   observer.complete();
            // }, 5000);

            setTimeout(() => {
                observer.next('third package');
            }, 6000);
            });

        - customSubscription: Subscription;

        - this.customSubscription = myObservable.subscribe(
            (data: string) => { console.log(data); },
            (error: string) => { console.log(error);},
            () => { console.log('completed'); }
          );

        - this.customSubscription.unsubscribe();
          this.numbersSubscription.unsubscribe();

    - Using Subjects
        - It is an observable, but allows us to push data convinently
        - It is an Observale and observer
        - export class UsersService {
                userActivated = new Subject();
            }
        - this.userService.userActivated.next(this.id);

        - this.usersService.userActivated.subscribe(
            (id: number) => {
                if(id === 1){
                this.user1Activated = true;
                }else if (id === 2){
                this.user2Activated = true;
                }
            }
            );

    - Operators
        - it can chain to any observable and manipulate the data, then the subscriber recives it

    - Observable in Angular 6+
        - 169

# Forms(Section 15)

    - Template Driven Form
        - Need Tom Import FormsModule
        - ngModel
            - This tells angular that this is control for the form
            - Need to give the name attribute name="username"
            - <input type="text" ngModel name="username">
        - ngForm
            - exposes the form as js object
            - <form (ngSubmit)="onSubmit(f)" #f="ngForm"></form>
            - in component @ViewChild('f') signUpForm: NgForm;
        - Validations
            - see 181, for links
            - To display error messages
                -  <input type="email" id="email" ngModel required email name="email" class="form-control" #email="ngModel">
                -  <span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid value!</span>
        - PropertyBinding for default values
            - <select id="secret"
                        [ngModel]="defaultSelection"
                        name="secret"
                        class="form-control">
                    <option value="pet">Your first Pet?</option>
                    <option value="teacher">Your first teacher?</option>
                </select>
        - Groups
            -  ngModelGroup expose's form as object
            - ngModelGroup="userData" => in object it will be "userData"
            -  <div  id="user-data" #userData="ngModelGroup" ngModelGroup="userData">
               </div>
            -  <p *ngIf="!userData.valid && userData.touched">User Data is Invalid!</p>
        - Setting and Patching Form
            - setValue({}) => this below will set the value of complete form
                - override's whole form
                - console log the form and copy paste the structure
                - this.signUpForm.setValue({});
            - patchValue({}) => only specific parts of form
                - patchValue oly available on form, even setValue is available on this
                - this.signUpForm.form.patchValue({
                                                    userData: {
                                                        username: suggestedName
                                                        },
                                                    })
        - Reset a form
            - this.signUpForm.reset();

    - Reactive Form
        - Customise form as per our needs
        - Need to import ReactiveFormsModule
        - <input
              type="text"
              id="username"
              formControlName="username" => important
              class="form-control">
              <span class="help-class"
                    *ngIf="!signUpForm.get('userData.username').valid && signUpForm.get('userData.username').touched"
              >
        - this.signUpForm = new FormGroup({
                // to avoid issues during minification and since this is used in html wrap it in ''
                'userData': new FormGroup({
                    // the reason we bind(this) here is coz, this code will be executed by angular and will no know about this
                    // 'username': new FormControl('default user', [Validators.required, this.forbiddenNames.bind(this)]),
                    'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                    'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
                }),
                'gender': new FormControl('male'),
                'hobbies': new FormArray([])
            });
        - Validations
            - new FormControl('default user', [Validators.required, this.forbiddenNames.bind(this)]),
            - Custom Validators
            - Async Validator
            - Error Codes => used to sho specific error message, ig name length is more, or needs to be of specific format
            - we can subscribe to statuschanges and value changes which are observables two hooks
                - this.signUpForm.statusChanges.subscribe({});
                - this.signUpForm.valueChanges.subscribe({});
            - Setting and Patching Similar to Template Driven

# Pipes(Section 17)

    - To view built in pipes https://angular.io/api?query=pipe
    - Transform data in Templates
    - Need to add in declarations in @NgModel, app.module
    -  <strong>{{ server.name | shorten: 15 }}</strong>
    - pure: false => setting pure to false enforces to recalculated pipes while the seach is done, performance issues will come
    - @Pipe({
            name: 'shorten'
            })
      export class ShortenPipe implements PipeTransform{
        transform(value: any, limit: number){
            if(value.length > limit){
            return value.substr(0, limit) + ' ...';
            }

            return value;
            }
        }
    - Async Pipe
        -  appStatus => is async call, api call etc in component
        -   {{ appStatus | async }}

# Http & Http Client Requests(Section 18)

    - This is for Angular 4 & 5. For 6+ minor updates are there
    - angular uses observables for http
    - as long as we dont subscribe request won't get fired
    - constructor(private http: Http){}
    -   const headers = new Headers({'Content-Type': 'application/json'});
         return this.http.post('https://angular-ng-http-e8b30.firebaseio.com/data.json',
                            servers,
                             {headers: headers}
                           );
    -   return this.http.put('https://angular-ng-http-e8b30.firebaseio.com/data.json',
                           servers,
                            {headers: headers}
                          );
                        }
    -   return this.http.get('https://angular-ng-http-e8b30.firebaseio.com/data.json');
    -   return this.http.get('https://angular-ng-http-e8b30.firebaseio.com/data')
               .map((response: Response) => {
                  const data = response.json();
                  for(const server of data){
                    server.name ='Fetched_' + server.name;
                  }
                  return data;
               })
               .catch(
                 (error: Response) => {
                  //console.log( error );
                  //  return Observable.throw(error);
                  return Observable.throw('Something went wrong');
                 }
               );
    - Angular 6+
        - import { map } from 'rxjs/operators';
        - ....pipe(map(...))
        - import { catchError } from 'rxjs/operators'
        - ....pipe(catchError(error => {
            return throwError(...)
        }))

# Adding Authentication(Section 20)

    - Using JWT
    - Authentication using local storage see customer sample app

# Using Angular Modules and Optimizing Apps(Section 21)

    - Modules
        -  @NgModule({
            declarations: [
                components/
                ],
            providers:[],
                imports: [
                // modules neede for this current module
                // import routing => RecipesRoutingModule
                ],
            exports: [(279)
                export all the module define here, so that we can import it in the main module
                Module needs to be declared onc
                ]
            });
        - or we can export specifically  => export class RecipesModule {}
        - we must not duplicate declarations or declare  pipes, directives, components in more than one modules but can import them module in modules. Declare in App Module
          error :  Type DropdownDirective is part of the declarations of 2 modules
        -   mostly need to import in every feature module
            gives access to ngclass, ngif ....
            import { CommonModule } from '@angular/common';
        - you need to position your RecipesModule  prior to the AppRoutingModule in feature module
            - imports: [
                    ..., // Other modules
                    RecipesModule,
                    AppRoutingModule
                ]
            - This is required to ensure that the Catch-all/ wildcard routes work correctly
        - Shared Modules
            -
        - Routing Module
            - RouterModule.forChild(recipesRoutes)
            - we can declare them anywhere once before visting that route

        - In AppModule
            - Browser Module should be use only in App module and it contains Common's Module
            -  @NgModule({
            declarations: [
                components/
                ],
            providers:[
                // add service accordinly, if used every where as common service add in app module.
            ],
                imports: [
                // modules neede for this current module
                ShoppingListModule,
                ],
            bootstrap: [
                    AppComponent
                ]
            });
            - here in app module we need to use BrowserModule it intun contains common module and others
            - here what ever is added is eager loaded meaning when app is intialise all this is all called.
            - recipes mould will be lazy loaded

        - Lazy Loading
            - In AppRoutes
            - const appRoutes: Routes = [
                // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
                {path: '', component: HomeComponent },
                // lazy loading recipes module, webpack handles it oly when we enter this route
                // once added lazy loading restart the server
                {path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule'},
                { path: 'shopping-list', component: ShoppingListComponent }
                ];

                @NgModule({
                // makes sure that, lazy loading happens when user is using app it downloads the code to BrowserModule
                // this can be customised by adding own strtegies
                imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
                exports: [RouterModule]
                })

                export class AppRoutingModule {

                }

            - You can add canActivate to the lazy loaded routes but that of course means, that you might load code which in the end can't get accessed anyways. It would be better to check that BEFORE loading the code (286)
            -  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }
            -  AuthGuard  should implement the CanLoad interface.

            - How Modules and Service works Using(287)
                - if a service is provided in app route it is global and a root injector instance is created
                - if a service is provided to lazy loaded module a seperate instance of chil injector is created with a seperate instance of the service
                - Hence tw different service instance are provided
                - Even if share instance with service is used for eager loaded and lay loaded, the above concept applies
                - In such a case we cannot use a global serive and there is no such use case according to max(dont provide services in shared modules, especially lazy loaded modules are used)
            - Using Child Injectors

            - Preload Lazy code, when user is browsing the code will be downloaded automatically, in app routes
                - imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],

        - AOT (Ahead Time Of Compilation) & JIT (Just In Time Compilation) (292)
            - Compile templates, to javascript
            - JIT compilation is the default during development
            - AOT compilation used for production
            - How to use AOT
                - ng build --prod --aot

# HttpClient

    - https://angular.io/guide/http
    - import { HttpClient } from '@angular/common/http'
    - Interceptors
    - Download percentage
    - Typed requests
        - this.hhtpClient.get<Recipe[]>('url').pipe(map())
    - Request Configuration and Response
        - const headers =   new HttpHeaders().set('Authoriztion', 'Bearer amnkjkhois');
        - this.httpClient.get<Recipe[]>('https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                  {
                                    observe: 'body',
                                    responseType: 'json',
                                    params: new HttpParams().set('auth', token)
                                    headers: headers})
        - observe response will be complete body will be only body, bolb,etc see documentation for more
      section 23 lecture 296
        - here we need not do response.json(); it is taken care by defult, in case we want other format like text, string

    -   helpful for seeing progress, uploading and downloading a file, creating request from scratch
        const req = new HttpRequest('PUT',
                                'https://ng-recipe-book-12729.firebaseio.com/recipes.json',
                                this.recipeService.getRecipies(),
                                {
                                  reportProgress: true
                                  params: new HttpParams().set('auth', token)
                                }
    -  Events
        - type 0, type 1,
        new HttpRequest('PUT','').subscribe((response: HttpEvent<Object>) => {
                //   console.log(response);
                //   console.log(response.type === HttpEventType.Response);
        // });

        );
    - Header
        - Set(), append()
    - Progress
        - gives feedback about progress
        - { reportProgress: true }

    - Interceptors
        - need to mention in providers, like services
        - in providers
            - order ins top to down execution
            - {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, // multi says that we can have more interceptors
            - {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
        - Interceptor going out to fetch
            -   @Injectable()
                export class AuthInterceptor implements HttpInterceptor {

                    constructor(private authService: AuthService){}

                    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                        // by default requests are immutable(CAN'T EDIT) hevce clone request
                        console.log('Intercepted!', req);
                        // we can only read not write, hence we can send an object to clone
                        const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
                        //const copiedReq = req.clone({headers: req.headers.append('', '')});
                        return next.handle(copiedReq);
                    }
                }

        - Intercept Incoming responses (code changed in angular 6do renamed to tap)
            -   export class LoggingInterceptor implements HttpInterceptor {
                intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                        // not consumed, just an itermediate step
                        return next.handle(req).do(
                        event => {
                            console.log('Logging interceptor', event);
                        }
                        );
                    }
                }

# CookBook

    - Images
        -  <img  [src]="recipe.imagePath" alt="{{ recipe.name }}"> => propery binding
        -  <img  src= {{recipe.imagePath}} alt="{{ recipe.name }}">
    - To Get the types of the elements of templates, use console.log in the component
        - onAddServer(serverNameInput: HTMLInputElement) { console.log(serverNameInput); }

# Debugging

    - Section 4

# Links

    - Create a angular plugin
        - https://itnext.io/how-to-build-a-plugin-extensible-application-architecture-in-angular5-736890278f3f
        - https://stackoverflow.com/questions/41438198/implementing-a-plugin-architecture-plugin-system-pluggable-framework-in-angu
