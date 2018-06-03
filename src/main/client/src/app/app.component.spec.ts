import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
            ],
        }).compileComponents();


        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    }));

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
