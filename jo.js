import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // إظهار نافذة التنبيه عند فتح التطبيق
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.showAlert()
        }
        return true
    }

    func showAlert() {
        let alert = UIAlertController(
            title: "تنبيه",
            message: "قم بفتح اللعبة المطلوبة للعمل على الكودات.",
            preferredStyle: .alert
        )
        alert.addAction(UIAlertAction(title: "موافق", style: .default, handler: nil))
        
        // عرض التنبيه
        if let rootVC = self.window?.rootViewController {
            rootVC.present(alert, animated: true, completion: nil)
        }
    }
}
