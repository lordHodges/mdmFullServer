import { Component } from "@angular/core";
import { ToastService } from "./component/util/toast.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "maintenanceDocumentManagement";
  constructor(public toastService: ToastService) {}
  showStandard() {
      this.toastService.show("I am a standard toast", {
        delay: 2000,
        autohide: true,
      });
  }
  showSuccess() {
    this.toastService.show("I am a success toast", {
      classname: "bg-success text-light",
      delay: 2000,
      autohide: true,
      headertext: "Toast Header",
    });
  }
  showError() {
    this.toastService.show("I am a error toast", {
      classname: "bg-danger text-light",
      delay: 5000,
      autohide: true,
      headertext: "Error!!!",
    });
  }
  showCustomToast(customTpl) {
    this.toastService.show(customTpl, {
      classname: "bg-info text-light",
      delay: 3000,
      autohide: true,
    });
  }

}
