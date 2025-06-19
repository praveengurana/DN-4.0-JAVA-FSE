import java.util.*;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Footwear"),
                new Product(3, "Watch", "Accessories"),
                new Product(4, "Phone", "Electronics"),
                new Product(5, "Backpack", "Travel"),
                new Product(6, "Camera", "Electronics"),
                new Product(7, "T-Shirt", "Clothing"),
                new Product(8, "Keyboard", "Electronics"),
                new Product(9, "Sunglasses", "Accessories"),
                new Product(10, "Book", "Stationery"),
                new Product(11, "Mouse", "Electronics"),
                new Product(12, "Charger", "Electronics"),
                new Product(13, "Water Bottle", "Travel"),
                new Product(14, "Jacket", "Clothing"),
        };

                Scanner sc=new Scanner(System.in);
        System.out.println("Enter the product to search: ");
        String targetName = sc.nextLine();


        System.out.println("Linear Search:");
        Product linearResult = ProductSearch.linearSearch(products, targetName);
        if (linearResult != null) {
            System.out.println("Product found: " + linearResult);
        } else {
            System.out.println("Product not found.");
        }


        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        System.out.println("\nBinary Search:");
        Product binaryResult = ProductSearch.binarySearch(products, targetName);
        if (binaryResult != null) {
            System.out.println("Product found: " + binaryResult);
        } else {
            System.out.println("Product not found.");
        }
    }
}
