# The price ID passed from the front end.
#   price_id = request.form.get('priceId')
price_id = '{{PRICE_ID}}'

session = stripe.checkout.Session.create(
  success_url='https://ozflight.live/success.html?session_id={CHECKOUT_SESSION_ID}',
  cancel_url='https://ozflight.live/cancel.html',
  mode='subscription',
  line_items=[{
    'price': price_id,
    # For metered billing, do not pass quantity
    'quantity': 1
  }],
)

# Redirect to the URL returned on the session
#   return redirect(session.url, code=303)
