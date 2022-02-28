export default interface UserProfile {
  name?: string;
  cardNumber?: string;
  spendingLimit?: number;
  cvv?: number;
  cardExpiry?: string;
  availableBalance?: number;
  spendingLimitActive?: boolean;
  cardFrozen?: boolean;
  loading?: boolean;
}
