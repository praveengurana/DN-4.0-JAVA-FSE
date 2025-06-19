import java.util.*;

public class FinancialForecast {

    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Present Value (₹): ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter the Annual Growth Rate (in %): ");
        double rate = sc.nextDouble();
        double growthRate = rate / 100;

        System.out.print("Enter the Number of Years to Forecast: ");
        int years = sc.nextInt();

        System.out.println("\n--- Financial Forecast ---");
        for (int i = 0; i <= years; i++) {
            double value = calculateFutureValue(presentValue, growthRate, i);
            System.out.printf("Year %d: ₹%.2f%n", i, value);
        }
    }
}
